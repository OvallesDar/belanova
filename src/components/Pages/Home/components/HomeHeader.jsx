import Headers from "../../../Common/Headers"

const data = {
    image: 'backgroundHome',
    title: 'BELANOVA INC.',
    subtitle: 'Drywall, Carpintería, Pintura.',
    subtitle1: 'Atención de primera con nuestra mejor calidad en productos y servicios ',
    button: 'Contáctanos',
    link: '/contact'
}

function HomeHeader() {
  return (
    <Headers left={false} data={data}/>
  )
}

export default HomeHeader