import { Container, Grid, Typography, TextField, Box, Button} from '@mui/material'

function ContactForm() {
  return (
    <Box bgcolor="#fff">
      <Container maxWidth="lg">
          <Grid container py={5} spacing={0}>
              <Grid item xs={12} sm={6} sx={{padding: "40px 40px 40px 0"}}>
                <Grid item xs>
                  <Typography  variant="h3" color='secondary.main'>Contacta</Typography>
                  <Typography variant="h3" color="initial">Déjanos un mensaje</Typography> 
                </Grid>
                <Grid item xs>
                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere harum totam nisi maiores libero, minima eligendi voluptas adipisci consequuntur explicabo.</Typography> 
                </Grid>
              </Grid>
              <Grid item sm={6}>   
                <TextField fullWidth id="name" label="Nombre *" />
                <TextField fullWidth id="lastname" label="Apellidos *"/>
                <TextField fullWidth id="email" label="Email *"/>
                <TextField fullWidth id="phone" label="Teléfono *"/>
                <TextField fullWidth id="message" label="Tú mensaje *" multiline rows={4}/>
                <Grid item pt={2}>
                  <Button variant="contained" color="secondary">
                    Enviar
                  </Button>
                </Grid>
              </Grid>
          </Grid>      
      </Container>
    </Box>
  )
}

export default ContactForm