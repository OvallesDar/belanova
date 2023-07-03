import PropTypes from 'prop-types';
import {Box, Container, Grid, Typography} from '@mui/material'
import IconWithTitle from './IconWithTitle';


function ContainerTitleText({data, icon}) {
  return (
    <Box bgcolor="primary.main">

    <Container maxWidth="lg">
      <Grid container spacing={0} py={10} alignItems="center">
        <Grid item xs={12} md={6} textAlign={"center"}>
            <Typography variant="h4" color="secondary">
                {data.title}
            </Typography>
            <Typography variant="h4" color="textColor.main">
                {data.subtitle}
            </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{"display": "flex", "flexDirection": "column", "gap": "28px", "flexWrap" : "nowrap"}}>  
            {icon.map((item, index)=> <IconWithTitle key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} />)}        
        </Grid>
        
      </Grid>
    </Container>
    </Box>
  )
}

ContainerTitleText.propTypes = {
    icon: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired
  };

export default ContainerTitleText