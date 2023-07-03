import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';

function CardCircleLogo(props) {
    return (
        <Box sx={{minHeight: '150px', justifyContent: "center", textAlign: "center", padding: "30px 10px"}} >
            <Box>
                <props.icon sx={{fontSize: '45px', padding: '0.3em', borderRadius: '50%', color: "secondary.light"}}/>
                <Typography variant="h5" color="textColor">
                    {props.title}
                </Typography>
                <Typography variant='body1' color="initial">
                    {props.subtitle}
                </Typography>
            </Box>
        </Box>
  )
}

CardCircleLogo.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
  };

export default CardCircleLogo