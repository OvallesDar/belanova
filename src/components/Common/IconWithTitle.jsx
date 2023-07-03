import PropTypes from 'prop-types';
import { Grid, Typography } from "@mui/material"

function IconWithTitle(props) {
  return (
    <Grid container spacing={0} gap={3} alignItems="center">
        <props.icon color="secondary" sx={{fontSize: '45px'}}/>
        <Grid item xs>
            <Typography variant="body1" color={props.color} fontWeight={"bold"}>{props.title}</Typography>
            {props.subtitle.map((item, index)=> <Typography key={index} variant="body1" color={props.color}>{item}</Typography>)}
        </Grid>
    </Grid>
  )
}

IconWithTitle.propTypes = {
    props: PropTypes.func,
    color: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.array,
  };

export default IconWithTitle