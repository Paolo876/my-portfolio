import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Toolbar, Box, Link } from '@mui/material'
import SkillIconImageItem from "../../components/SkillIconImageItem"
import logo from "../../assets/logo.svg"

import "./navbar.scss"

const Navbar = () => {
  const location = useLocation();
  const isLandingPageView = Boolean(location.pathname === "/")

  // window.onscroll = () => {
  //   if(window.pageYOffset == 0) {
  //     console.log("Top of the window");
  //   }
  // }

  return (
    <AppBar component="nav" className="navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{display: "flex", flexDirection: {xs: "column", md:"row"}, gap: 1, p:{xs:0, sm:2, md: 3, }, alignItems: isLandingPageView ? "flex-start" : "center"}} >
          <Link component={ReactLink} to="/" sx={{mt: {xs: 1, md: 0}}}>
            {/* <Box sx={{height: {xs: 35, sm:45}, width: "auto"}}>
              <SkillIconImageItem src={logo} sx={{filter: "brightness(1) grayscale(0)"}} />
            </Box> */}
            <Typography fontSize={{xs: 14, sm: 15, md: 16}} variant="h3">PB</Typography>
          </Link>
          {!isLandingPageView &&
            <Box sx={{ml: {xs:0, md:"auto"}, display: "flex", flexDirection: "row", gap: 3}} >
              <Link component={NavLink} to="/home" draggable={false}><Typography fontSize={{xs: 14, sm: 15, md: 16}}>Home</Typography></Link>
              <Link component={NavLink} to="/projects" draggable={false}><Typography fontSize={{xs: 14, sm: 15, md: 16}}>Projects</Typography></Link>
              <Link component={NavLink} to="/about" draggable={false}><Typography fontSize={{xs: 14, sm: 15, md: 16}}>About</Typography></Link>
              <Link component={NavLink} to="/contact" draggable={false}><Typography fontSize={{xs: 14, sm: 15, md: 16}}>Contact</Typography></Link>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar