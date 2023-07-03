import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logobelanova.svg"
import {AppBar, Box, Toolbar, Button, styled, useTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Anchor = styled('a')(() =>({
  textDecoration: 'none',
  textAlign: 'center'
}))

const Image = styled('img')(()=>({
    width: '250px',
    height: '140px',
    objectFit: 'cover'
}))

function NavBar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleScroll = () => {
    const cantScroll = window.scrollY
    cantScroll >= 200 ? setScroll(true) : setScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
  })

   const LinkButton = (props) => <Button color="textColor" size="medium" sx={{fontWeight: "bold"}} component={Link} {...props} onClick={click ? handleClick : null}/>
  
  const theme = useTheme()

  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="fixed" color="primary" sx={{backgroundColor: {lg: scroll? "primary" : "primary.transparent"}}}>
          <Toolbar>
            <Box position={"absolute"} top={0} left={{xs: 0, lg: 50}} >
              <LinkButton to="/" sx={{zIndex: 1, padding: 0}}>
                <Image src={logo} alt="" />
              </LinkButton>
            </Box>
            <Box display={"flex"} flexGrow={1} gap={3} alignItems={{xs: "flexStart", lg: "center"}} justifyContent={"center"} flexDirection={{xs: "column", lg: "row"}} height={{xs: click ? "100vh" : "140px", lg: "140px"}} position="relative" top={{xs: click ? 0 : "-300px", lg: 0}} sx={{transition: "all 0.5s ease"}}>
              <LinkButton to="/about">Nosotros</LinkButton>
              <LinkButton to="/carpentry" >Carpintería</LinkButton>
              <LinkButton to="/drywall">Drywall</LinkButton>
              <LinkButton to="/generalservices">Servicios Generales</LinkButton>
              <Anchor target="blank" href="https://wa.me/51944983568">
              <Button sx={{color: theme.palette.textColor.main, fontWeight: 'bold'}} size="large" startIcon={<WhatsAppIcon/>}>
                  +51 944 983 568
              </Button>
            </Anchor>
            </Box>
            <MenuIcon onClick={handleClick} sx={{color: "textColor", position: "absolute", fontSize: "50px", top: "50px", right: "40px", display: {lg: "none"}}}/>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
}

export default NavBar;