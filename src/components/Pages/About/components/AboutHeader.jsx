import Headers from "../../../Common/Headers"

const data = {
    image: 'backgroundAbout',
    title: 'BELANOVA INC.',
    subtitle: 'Ofrecemos un servicio de gran profesionalidad ',
    subtitle1: 'Pondremos a tu disposición todos los lorem',
    button: 'Contáctanos',
    link: '/contact'
}

function AboutHeader() {
  return (
    <Headers left={false} data={data}/>
  )
}

export default AboutHeader