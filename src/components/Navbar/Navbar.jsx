import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Toolbar, Box, Link } from '@mui/material'
import "./navbar.scss"

const Navbar = () => {
  const location = useLocation();
  const isLandingPageView = Boolean(location.pathname === "/")

  return (
    <Box >
    <AppBar component="nav" className="navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Link component={ReactLink} to="/"><Typography fontWeight={700}>LOGO_HERE</Typography></Link>
          {!isLandingPageView &&
            <Box sx={{ml: "auto", display: "flex", flexDirection: "row", gap: 2}} >
              <Link component={NavLink} to="/home" draggable={false}><Typography>Home</Typography></Link>
              <Link component={NavLink} to="/projects" draggable={false}><Typography>Projects</Typography></Link>
              <Link component={NavLink} to="/about" draggable={false}><Typography>About</Typography></Link>
              <Link component={NavLink} to="/services" draggable={false}><Typography>Services</Typography></Link>
              <Link component={NavLink} to="/contact" draggable={false}><Typography>Contact</Typography></Link>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
    {/* <Toolbar></Toolbar>  */}
    </Box>

  )
}

export default Navbar