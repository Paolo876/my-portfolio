import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Typography, AppBar, Container, Toolbar, Box, Link } from '@mui/material'
import "./navbar.scss"

const Navbar = () => {
  return (
    <Box>
    <AppBar component="nav" className="navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography>LOGO HERE</Typography>
          <Box sx={{ml: "auto", display: "flex", flexDirection: "row", gap: 2}}>
            <Link component={NavLink} to="/home"><Typography>Home</Typography></Link>
            <Link component={NavLink} to="/projects"><Typography>Projects</Typography></Link>
            <Link component={NavLink} to="/about"><Typography>About</Typography></Link>
            <Link component={NavLink} to="/services"><Typography>Services</Typography></Link>
            <Link component={NavLink} to="/contact"><Typography>Contact</Typography></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar>{/* space filler to shift components under the navbar */}</Toolbar> 
    </Box>

  )
}

export default Navbar