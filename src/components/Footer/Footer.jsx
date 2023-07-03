import {Grid, Typography, Container, Button, Box, styled} from "@mui/material"
import { Link } from "react-router-dom";

const Image = styled('img')(()=>({
  paddingTop: '10px',
  width: '140px',
  height: '80px',
  objectFit: 'cover'
}))
  
function Footer() {

  const LinkFooter = (props) => <Button color="inherit" size="medium" sx={{"textTransform": "capitalize", "padding": "1px"}} component={Link} {...props}/>

  return (
    <Box bgcolor="primary.contrastText"> 
      <Container maxWidth="lg" >
          <Image src="src/assets/logobelanova.svg" alt="logotipo"/>
          <hr />
          <Grid container spacing={2} alignItems="center" pb={2}> 
            <Grid item xs={12} md={6} lg={3} textAlign="center">
              <Typography variant="body1">Somos una empresa especialista en Lorem, ipsum. Gracias a nuestro método Lorem, ipsum dolor.</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3} textAlign="center" display="flex" flexDirection="column">
              <Typography variant="body1" fontWeight="bold">CONTACTO</Typography>
              <LinkFooter to="/contact">belanova@gmail.com</LinkFooter>
              <LinkFooter to="/contact">+51 944 983 568</LinkFooter>
            </Grid>

            <Grid item xs={12} md={6} lg={3} textAlign="center" display="flex" flexDirection="column">
              <Typography variant="body1" fontWeight="bold">SERVICIOS</Typography>
              <LinkFooter to="/carpentry">Carpintería</LinkFooter>
              <LinkFooter to="/drywall">Drywall</LinkFooter>
              <LinkFooter to="/generalservices">Servicios Generales</LinkFooter>
            </Grid>

            <Grid item xs={12} md={6} lg={3} textAlign="center">            
              <Typography variant="body1" fontWeight="bold">¡TU EMPRESA POR EXCELENCIA!</Typography>
              <Typography variant="body1">Déjanos tus datos y te contactamos</Typography>
              <LinkFooter to="/contact" variant="contained" color="secondary" sx={{padding: 0.5}}>
                ¡TE LLAMAMOS!              
              </LinkFooter>
            </Grid>

          </Grid>
      </Container>
      <Box bgcolor={"primary.main"} p={3} textAlign="center">
        <Typography variant="subtitle2" fontWeight="bold" color="textColor">CopyRight 2023. Todos los derechos reservados</Typography>
      </Box>
    </Box>
  )
}

export default Footer