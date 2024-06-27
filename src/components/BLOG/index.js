// Importacion de valores globales de Slider
var Slider = window.SliderRecetasCategoria;

function MiComponente(Slider) {
  let NumCards = Slider.length;
  console.log("NumSlider", NumCards);
  console.log("CArDs", Slider);

  if (NumCards === 0) {
    return `<div class="NoCategory">No hay Categorias disponibles</div>`;
  } else if (NumCards > 0) {
    return (
      Slider &&
      Slider.map((element) => {
        `<div class="cardContainer">
                  <div class="cardImageContainer">
                    <img src="${element?.urlImage}" alt="receta-${element?.index}" />
                  </div>
                  <div class="cardTextContainer">
                    <span>${element?.titleCategory}</span>
                  </div>
              </div>`;
      })
    );
  }
}

// Función para renderizar un componente en el contenedor
function renderizar(componente, contenedorId) {
  document.getElementById(contenedorId).innerHTML = componente;
}
// Renderizar el componente inicial
renderizar(MiComponente(SliderRecetasCategoria), "miSliderRecetasCategoria");
