import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Container, Box, Link, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import "./navbar.scss";
import LinksModal from './LinksModal';

const Navbar = () => {
  const location = useLocation();
  const isLandingPageView = Boolean(location.pathname === "/")
  const [ currentOffset, setCurrentOffset ] = useState(window.pageYOffset);
  const [ isScrolledDown, setIsScrolledDown ] = useState("top");
  const [ showModal, setShowModal ] = useState(false);

  window.onscroll = () => {
    if(window.pageYOffset < 50) {
      setIsScrolledDown("top");
    } else {
      if((currentOffset + 3) < window.pageYOffset || currentOffset > (window.pageYOffset + 10) ) {
        setIsScrolledDown(currentOffset < window.pageYOffset);
      }
      setCurrentOffset(window.pageYOffset)
    }
  }

  return (
    <AppBar component="nav" className={`navbar ${isScrolledDown === "top" ? "page-top" : isScrolledDown ? "scroll-down" : "scroll-up"}`} position="fixed" sx={{minHeight: 0}}>
      <Container maxWidth="xl">
        <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, sm: .5, md:1.5, lg: 1.5, xl: 3 }, py:{xs:.65, sm:1.15, md: 1.75, xl: 2 }, alignItems: "center"}}>
          <Link component={ReactLink} to="/">
            <Typography fontSize={{xs: 14, sm: 15, md: 16}} variant="h3">PB</Typography>
          </Link>
          {!isLandingPageView &&
            <>
              <Box sx={{ml: {xs:0, md:"auto"}, display:{xs: "none", md: "flex"}, flexDirection: "row", gap: {md:4, lg: 5,xl: 7.5}}} className="link-items">
                <Link component={NavLink} to="/home" draggable={false}><Typography fontSize={{md: 15, lg: 16,xl: 17}}>Home</Typography></Link>
                <Link component={NavLink} to="/projects" draggable={false}><Typography fontSize={{md: 15, lg: 16,xl: 17}}>Projects</Typography></Link>
                <Link component={NavLink} to="/about" draggable={false}><Typography fontSize={{md: 15, lg: 16,xl: 17}}>About</Typography></Link>
                <Link component={NavLink} to="/contact" draggable={false}><Typography fontSize={{md: 15, lg: 16, xl: 17}}>Contact</Typography></Link>
              </Box>
              <IconButton sx={{display: {md:"none"}, ml: "auto", opacity: .75}} size="small" color="primary" onClick={() => setShowModal(true)}>
                <MenuIcon sx={{fontSize: 30}}/>
              </IconButton>
            </>
          }
        </Box>
      </Container>
      <LinksModal open={showModal} onClose={() => setShowModal(false)}/>
    </AppBar>
  )
}

export default Navbar