import {Grid, styled, Container} from '@mui/material';
import {Foundation, Carpenter, FormatPaint, Construction} from '@mui/icons-material/';
import CardCircleLogo from '../../../Common/CardCircleLogo';
import { useTheme } from '@emotion/react';

const dataCircle = [
    {
        logo: Carpenter,
        title: 'Carpintería',
        subtitle: 'Expertos en todo tipo de maderas, realizamos cualquier tipo de mueble hecho a la medida'
    },
    {
        logo: Foundation,
        title: 'Drywall',
        subtitle: 'Manera rápida y económica de construir que se emplea en la división de ambientes, creación de estructuras y ornamentos.'
    },    {
        logo: FormatPaint,
        title: 'Pintura',
        subtitle: 'Pintamos su piso, apartamento, chalet desde 300 euros pintura blanca mate lavable de primera calidad todo incluido y en color pedir presupuesto.'
    },    {
        logo: Construction,
        title: 'Pisos Laminados',
        subtitle: 'Instalacion y desintalacion de pisos laminados, zocalos'
    },
]


function FourthSection() {
    const theme = useTheme()
    const Background = styled('div')(() => ({
        backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.contrastText} 50%, ${theme.palette.primary.light} 50%)`
    }))

    return (
        <Background>
            <Container maxWidth="lg" sx={{backgroundColor: "#fff", borderRadius: "10px", paddingY: "30px"}}>
                <Grid container justifyContent='center' spacing={0}>
                    {dataCircle.map((item, index) => <Grid item xs={12} sm={6} md={4} key={index} ><CardCircleLogo icon={item.logo} title={item.title} subtitle={item.subtitle}/></Grid>)}
                </Grid>
            </Container>
        </Background>
  )
}

export default FourthSection