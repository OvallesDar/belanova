import { ThemeProvider } from "@mui/material/styles"
import {theme} from './theme/customTheme'
import { Route, Routes } from "react-router-dom"

import NavBar from "./components/Navbar/NavBar"
import Home from "./components/Pages/Home/Home"
import About from "./components/Pages/About/About"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
          
      </Routes>
      <Footer/>
    </ThemeProvider>
  )
}

export default App