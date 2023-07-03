import ContainerTitleText from "../../../Common/ContainerTitleText"

import {ImportantDevices, ShareLocation, Translate} from '@mui/icons-material/';

const data = {
    title: "Reconocidos",
    subtitle: "en todo el país",
  }

const icon = [
  {
    icon: ShareLocation,
    title: "Carácter internacional",
    subtitle: ["Oficinas en España.", "La mayor experiencia trabajando con clientes de todo el mundo."],
  },
  {
    icon: Translate,
    title: "En cualquier idioma",
    subtitle: ["Somos multilingües.", "Servicios creación de contenidos en todos los idiomas."],
  },
  {
    icon: ImportantDevices,
    title: "Trabajamos online",
    subtitle: ["Trabajamos 100% online", "Para poder darte siempre los mejores resultados"],
  },

]

function AboutThird() {
  return (
    <ContainerTitleText data={data} icon={icon}/>
  )
}

export default AboutThird