import PropTypes from 'prop-types';
import {Grid, Container, Typography, Button, styled} from "@mui/material";
import { Link } from "react-router-dom";

function Headers({left = Boolean, data}) {
    const Background = styled('div')(({theme}) =>({
        paddingTop: "100px",
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 100px)",
        /* [theme.breakpoints.only('xs')] : {
          minHeight: "-webkit-fill-available"
        }, */
        backgroundImage: `url(src/assets/${data.image}.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", 
        position: "relative",
        [theme.breakpoints.up('lg')] : {
          backgroundAttachment: 'fixed'
        },
        '&:before': {
          content : '""', 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          backgroundColor: "#000000a0"
        }
      }))
      return (
        <Background>
          <Container maxWidth="lg" sx={{zIndex: 1}}>
            <Grid container justifyContent={left ? "start" : "end"} direction="row" spacing={0}>
              <Grid item xs={12} lg={6} alignSelf="center" textAlign={{ xs: "center", lg: "justify" }}>
                <Grid container color="primary.contrastText" direction="column" spacing={3}>
                  <Grid item xs>
                    <Typography variant="h1"  sx={{ fontSize: { xs: "2em", lg: "2.5em" } }}>
                      {data.title}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h3" sx={{ fontSize: { xs: "1em", lg: "1.5em" } }}>
                      {data.subtitle}
                    </Typography>
                    <br />
                    <Typography variant="body3" sx={{ fontSize: { xs: "0.9em", lg: "1.4em" } }}>
                      {data.subtitle1}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Button component={Link} to={data.link} variant="contained" color="secondary" size="medium" sx={{ paddingY: "0.6em"}}>
                      {data.button}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Background>
      );
}


Headers.propTypes = {
  left: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};
export default Headers