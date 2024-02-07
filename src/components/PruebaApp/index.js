// Importacion de valores globales de Galeria
var Galeria = window.Gallery;

// Divide el array en arrays más pequeños
function dividirArray(arrayOriginal, tamanoSubarray) {
    const resultados = [];
    for (let i = 0; i < arrayOriginal.length; i += tamanoSubarray) {
        const subarray = arrayOriginal.slice(i, i + tamanoSubarray);
        resultados.push(subarray);
    }
    return resultados;
}

const tamanoSubarray = 4;

const arraysPequenos = dividirArray(Galeria, tamanoSubarray);
console.log("arrayPequenos", arraysPequenos);

// Estado para controlar ComboImagenes
let ComboImagenes = 2;

// Función para el control de imágenes
function ControlImagenes() {
    ComboImagenes = ComboImagenes + 1;
    // Volver a renderizar el componente con el nuevo estado
    renderizar(MiComponente(Galeria, arraysPequenos, ComboImagenes), 'miContainerGallery');
}

function MiComponente(Galeria, arraysPequenos, ComboImagenes) {
    let NumImages = Galeria.length;
    let NumArrays = arraysPequenos.length;
    console.log("NumArrays", NumArrays);

    if (NumImages === 0) {
        return `<div class="NoGallery">No hay imágenes disponibles</div>`;
    } else if (NumImages > 0) {
        return (
            arraysPequenos &&
            arraysPequenos.slice(0, ComboImagenes).map((element) =>
                element.length === 4
                    ? `
                <div class="multipleContainerGallery">
                  <div class="ImgVertGallery">
                    <img
                      src=${element[0]?.urlImgage}
                      alt="gallery-${element[0]?.index}"
                    />
                  </div>
                  <div class="ContainerMiniGallery">
                    <div class="ImgMiniGallery">
                      <img src=${element[1]?.urlImgage} alt="gallery-${element[1]?.index}" />
                    </div>
                    <div class="ImgMiniGallery">
                      <img
                        src=${element[2]?.urlImgage}
                        alt="gallery-${element[2]?.index}"
                      />
                    </div>
                  </div>
                </div>
                <div class="uniqueContainerGallery">
                  <img src=${element[3]?.urlImgage} alt="gallery-${element[3]?.index}" />
                </div>
              `
                    : null
            ).join('') + (NumImages > 11 &&  NumArrays > ComboImagenes ? `
            <div class="ButtonGallery" id="miButtonGallery" onclick="ControlImagenes()">
              <button>Ver más</button>
            </div>` : '')
        );
    }
}

// Función para renderizar un componente en el contenedor
function renderizar(componente, contenedorId) {
    document.getElementById(contenedorId).innerHTML = componente;
}
// Renderizar el componente inicial
renderizar(MiComponente(Galeria, arraysPequenos, ComboImagenes), 'miContainerGallery');
