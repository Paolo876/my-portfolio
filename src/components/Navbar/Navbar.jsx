import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Toolbar, Box, Link } from '@mui/material'
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
        <Toolbar sx={{display: "flex", flexDirection: {xs: "column", md:"row"}, gap: 1, p:{xs:0, md: "initial"}}} >
          <Link component={ReactLink} to="/"><Typography fontWeight={700}>LOGO_HERE</Typography></Link>
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