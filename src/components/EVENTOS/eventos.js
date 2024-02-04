const ValoresEventos = [
  {
    title: "Bodas",
    pharagraph:
      "En las bodas, nos aseguramos de que cada detalle esté cuidado, desde la recepción con elegantes cócteles hasta la barra libre en la fiesta, brindando a tus invitados...",
    subtitle: "una experiencia inolvidable",
    imgUrl: "https://eternology.com.mx/wp-content/uploads/2024/02/BodasImage-scaled.jpeg",
  },
  {
    title: "XV Años",
    pharagraph:
      "Para los XV años, creamos un ambiente mágico con cócteles y bebidas personalizadas que complementan perfectamente la temática...",
    subtitle: "y la energía de la celebración",
    imgUrl: "https://eternology.com.mx/wp-content/uploads/2024/02/xvanos.jpeg",
  },
  {
    title: "Bautizos",
    pharagraph:
      "En los bautizos, nos encargamos de crear una atmósfera cálida y acogedora, con una selección de bebidas refrescantes para que tus seres queridos...",
    subtitle: "disfruten de este día especial",
    imgUrl: "https://eternology.com.mx/wp-content/uploads/2024/02/bautizos.png",
  },
  {
    title: "Graduaciones",
    pharagraph:
      "En las graduaciones, celebramos los logros y el inicio de una nueva etapa. Nuestras barras libres ofrecen una amplia selección de bebidas para que los graduados y sus amigos...",
    subtitle: "brinden por el éxito futuro",
    imgUrl: "https://eternology.com.mx/wp-content/uploads/2024/02/graduaciones.png",
  },
  {
    title: "Fiestas",
    pharagraph:
      "En las fiestas de cumpleaños, nos sumergimos en la diversión y la alegría. Preparamos cócteles creativos y emocionantes para garantizar que cada invitado tenga...",
    subtitle: "un momento inolvidable",
    imgUrl: "https://eternology.com.mx/wp-content/uploads/2024/02/fiestas.jpeg",
  },
  {
    title: "Eventos Ejecutivos",
    pharagraph:
      "En eventos empresariales, nos aseguramos de que cada detalle refleje profesionalismo y excelencia. Nuestro equipo de mixólogos expertos creará bebidas sofisticadas que...",
    subtitle: "impresionarán a tus clientes y colegas",
    imgUrl: "https://eternology.com.mx/wp-content/uploads/2024/02/eventosEjecutivos.png",
  },
];

function handleChange(value) {
  let NumberEvent = 0;
  if (value == "opcion2") {
    NumberEvent = 1;
  } else if (value == "opcion3") {
    NumberEvent = 2;
  } else if (value == "opcion4") {
    NumberEvent = 3;
  } else if (value == "opcion5") {
    NumberEvent = 4;
  } else if (value == "opcion6") {
    NumberEvent = 5;
  } else {
    NumberEvent = 0;
  }

  let spanTitle = document.getElementById("miTitleCustomMobile");
  spanTitle.textContent = ValoresEventos[NumberEvent]?.title;
  let spanPharagraph = document.getElementById("miParagraphCustomMobile");
  spanPharagraph.textContent = ValoresEventos[NumberEvent]?.pharagraph;
  let spanSubtitle = document.getElementById("miSubtitleCustomMobile");
  spanSubtitle.textContent = ValoresEventos[NumberEvent]?.subtitle;
  let spanImage = document.getElementById("miImageCustomMobile");
  spanImage.src = ValoresEventos[NumberEvent]?.imgUrl;
  spanImage.alt = ValoresEventos[NumberEvent]?.title;
}
