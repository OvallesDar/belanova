import {Typography, Grid, Container, Box} from '@mui/material';
import CardImageButton from '../../../Common/CardImageButton';

const dataCards = [
    {
        image: "drywall",
        title: "Drywall",
        subtitle: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        button: "Share"
    },
    {
        image: "laminados",
        title: "Suelos Laminados",
        subtitle: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        button: "Share"
    },
    {
        image: "pintar",
        title: "Pintamos tu piso",
        subtitle: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        button: "Share"
    },

    
]

function HomeCardImageButton() {
    return (
    <Box bgcolor="primary.light">
        <Container sx={{padding: '50px 0'}}>
            <Grid px={2} container spacing={0}>
                <Typography variant="h4" color="inherit">Lorem, ipsum dolor.</Typography>
                <Typography variant='body1' color="inherit">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nihil consequatur numquam, odit dolore soluta incidunt vitae ex temporibus at.</Typography>
            </Grid>  
            <Grid container justifyContent={"center"} py={5} spacing={0}>
                {dataCards.map((item, index)=> <Grid item xs={12} sm={5} md={3.8} key={index} mb={3}><CardImageButton content={item}/></Grid>)}
            </Grid>
        </Container>
    </Box>
  )
}

export default HomeCardImageButton