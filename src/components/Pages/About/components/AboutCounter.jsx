import {Container, Grid, styled, Typography } from "@mui/material";
import Counter from "../../../Common/Counter";

const data = [
    {
        end : "200",
        subtitle: "Clientes Satisfechos"
    },
    {
        end : "100",
        subtitle: "Proyectos"
    },
    {
        end : "10",
        subtitle: "Años de experiencia"
    }
]

function AboutCounter() {
    const Background = styled('div')(()=> ({
        backgroundColor: "#171718",
        backgroundImage: "url('https://img.freepik.com/free-vector/shiny-white-gray-background-with-wavy-lines_1017-25101.jpg?w=2000')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
    }))
  return (
    <Background>
        <Container maxWidth="lg" sx={{"paddingY": "50px"}}>
            <Grid container spacing={0} direction="column" textAlign="center">
                <Typography variant="h5" color="secondary">Somos la solución perfecta</Typography>
                <Typography variant="h4" color="textColor">Para tus proyectos</Typography>
            </Grid>
            <Grid container spacing={0}>
                {data.map((item, index) => {
                    return (
                        <Grid key={index}  item xs= {12} sm={4}>
                        <Counter end={item.end} subtitle={item.subtitle} /> 
                    </Grid>
                    )}
                    )}
            </Grid>
        </Container>
    </Background>
    )
}

export default AboutCounter