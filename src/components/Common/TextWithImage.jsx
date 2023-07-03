import PropTypes from 'prop-types';
import { Box, Typography, Container, Grid, Button, styled} from "@mui/material";
import { Link } from "react-router-dom";

const Image = styled('img')(({theme}) =>({
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
        maxWidth: "600px",
      },  
}))

function TextWithImage({direction= Boolean, content=[{}]}) {
    return (
    <Box py={4} bgcolor="primary.contrastText">
      <Container maxWidth="lg">
        <Grid container spacing={2} flexDirection={direction ? "row" : "row-reverse"} alignItems="center">
          <Grid item xs={12} md={6} >
            <Image src={content.img} alt={content.title}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction={"column"} spacing={2}>
              <Grid item xs>
                <Typography variant="h6" color="initial">{content.title}</Typography>
              </Grid>
              <Grid item xs>
                  {content.description.map((item, index) => <Typography mb={1} color="initial" variant="body1" key={index}>{item}</Typography>)}
              </Grid>
              <Grid item xs>
                <Button component={Link} to={content.route} variant="contained" color="secondary">{content.button}</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

TextWithImage.propTypes = {
    direction: PropTypes.bool.isRequired,
    content: PropTypes.object.isRequired
  };

export default TextWithImage;