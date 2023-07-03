import PropTypes from 'prop-types';
import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material"


function Counter({end, subtitle}) {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <Box textAlign={"center"}>
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <Typography variant="h1" variantMapping={{h1 : "h6"}} color="secondary">{counterOn && <CountUp end={end} duration={1.5} delay={0}/>}+</Typography>
        </ScrollTrigger>
        <Typography variant="body1" color="textColor.main">{subtitle}</Typography>
    </Box>
  )
}

Counter.propTypes = {
  end: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Counter