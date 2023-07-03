import TextWithImage from "../../../Common/TextWithImage";

const content = [
    {
      title: "Todo tipo de soluciones para el hogar",
      description: [
        "Soluciones a la medida de sus necesidades con la mejor relación calidad-precio.Somos especialistas en instalaciones de carpintería. Realizamos montajes nuevos de puertas, armarios, suelos, cocinas y ventanas.", 
        "En nuestra tienda de Tres Cantos tenemos una pequeña exposición de puertas acorazadas, puertas de interior, vestidores, frentes de armarios, suelos laminados (tarima flotante) y rodapiés"
      ],
      button: "saber más",
      route: "/it",
      img: "https://arteydiseñocarpinteria.com/wp-content/uploads/2023/05/Ventanas.jpg",
    },
    {
      title: "Armarios a medida, empotrados, vestidores y cajoneras.",
      description: [
        "Puede  personalizar su armario o vestidor con cajoneras con guías ocultas y cierre suave, puertas abatibles, puertas plegables y plegables correderas.",
      ],
      button: "Contáctanos",
      route: "/it",
      img: "https://arteydiseñocarpinteria.com/wp-content/uploads/2023/05/Armarios-blancos.jpg",
    },
  ];

function HomeFirstSection() {
  return (
    content.map((item, index) => <TextWithImage key={index} direction={index % 2 === 0} content={item}/>)
  )
}

export default HomeFirstSection