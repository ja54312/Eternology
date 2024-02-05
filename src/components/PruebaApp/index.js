console.log("Hola");

// Función que simula un componente en React
function MiComponente(props) {
    return `<div>${props.texto}</div>`;
}

// Función para renderizar un componente en el contenedor
function renderizar(componente, contenedorId) {
    document.getElementById(contenedorId).innerHTML = componente;
}

// Estado inicial
const estadoInicial = {
    texto: "¡Hola desde mi componente!"
};

// Renderizar el componente inicial
renderizar(MiComponente(estadoInicial), 'app');

// Actualizar el estado y volver a renderizar
setTimeout(() => {
    const nuevoEstado = {
        texto: "¡Estado actualizado!"
    };
    renderizar(MiComponente(nuevoEstado), 'app');
}, 2000);
