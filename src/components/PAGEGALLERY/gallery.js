console.log("Hola");
const Gallery = [
  {
    index: 0,
    urlImgage:
      "https://eternology.com.mx/wp-content/uploads/2024/02/eventosEjecutivos.png",
  },
];
console.log(0, Gallery);
//let numFotos = 0;
//console.log(0.1, numFotos);
let containerGalleryMaster = document.getElementById("miContainerGallery");
console.log(0.11, containerGalleryMaster);
//let emptyDiv = document.createElement("div");
//emptyDiv.innerHTML = "<div>No hay imagenes</div>";
//containerGalleryMaster.appendChild(emptyDiv);
//let buttonGallery = document.getElementById("miButtonGallery");
//console.log(7, buttonGallery);
//Función que simula un componente en React
function MiComponente(props) {
  return `<div>${props.texto}</div>`;
}

// Función para renderizar un componente en el contenedor
function renderizar(componente, contenedorId) {
  document.getElementById(contenedorId).innerHTML = componente;
}

// Estado inicial
const estadoInicial = {
  texto: "¡Hola desde mi componente!",
};

// Renderizar el componente inicial
renderizar(MiComponente(estadoInicial), "miContainerGallery");

// Actualizar el estado y volver a renderizar
setTimeout(() => {
  const nuevoEstado = {
    texto: "¡Estado actualizado!",
  };
  renderizar(MiComponente(nuevoEstado), "miContainerGallery");
}, 2000);
