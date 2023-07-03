import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material';

function CardImageButton({content = [{}]}) {
    return (
      <Grid container m={1} justifyContent={"center"}>
        <Card sx={{ maxWidth: {xs: '100%', sm: 300} }}>
          <CardMedia
            sx={{ height: {xs: 300, sm: 200}}}
            image={`src/assets/${content.image}.jpg`}
            title={content.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {content.title}
            </Typography>
            <Typography variant="body2">
              {content.subtitle}
            </Typography>
          </CardContent>
          <CardActions sx={{padding: 1.5}}>
            <Button variant='contained' color='secondary' size="small">{content.button}</Button>
          </CardActions>
        </Card>
      </Grid>
    );
}

CardImageButton.propTypes = {
    content: PropTypes.object.isRequired
  };

export default CardImageButton