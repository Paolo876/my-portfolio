import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, Link as ReactLink } from 'react-router-dom';
import { Typography, AppBar, Box, Link, IconButton, Grid } from '@mui/material'
import Image from 'mui-image';
import logo from "../../assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';

import "./navbar.scss";
import LinksModal from './LinksModal';

const Navbar = () => {
  const location = useLocation();
  // const isNavbarHidden = Boolean(location.pathname === "/" && window.pageYOffset < 500)
  const [ currentOffset, setCurrentOffset ] = useState(window.pageYOffset);
  const [ isScrolledDown, setIsScrolledDown ] = useState("top");
  const [ showModal, setShowModal ] = useState(true);

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

  // console.log(isNavbarHidden)
  return (
    <AppBar 
      component="nav" 
      className={`navbar ${isScrolledDown === "top" ? "page-top" : isScrolledDown ? "scroll-down" : "scroll-up"}`} 
      position="fixed" 
      sx={{
        minHeight: 0,
        px: { xs:1.75, sm: 3, md: 4, lg: 5}, 

      }}
    >
      <Grid 
        container
        sx={{
          position: "relative", 
          py:{xs:.5, sm:1.15, md: 1.75, xl: 1 },
          maxWidth: "1500px",
          mx: "auto",
          // overflow: "hidden",
          opacity: isScrolledDown === "top" && location.pathname === "/" ? 0 : 1,
        }}
      >
        <Grid item xs={1} sx={{display: "flex", alignitems: "center"}}>
          <Link component={ReactLink} to="/">
            {/* <Typography fontSize={{xs: 14, sm: 15, md: 16}} variant="h3">PB</Typography> */}
            <Box sx={{}}>
              <Image src={logo} height={45} width="auto"/>
            </Box>
          </Link>
        </Grid>
        <Grid 
          item 
          md={11}  
          sx={{
            ml: {xs:0, md:"auto"}, 
            display:{xs: "none", md: "flex"}, 
            flexDirection: "row", 
            justifyContent: "right",
            alignItems: "center",
            gap: {md:4, lg: 5,xl: 7.5},
          }} 
          className="link-items"
        >
          <Link component={NavLink} to="/" draggable={false}><Typography fontSize={{md: 15, lg: 16,xl: 17}}>Home</Typography></Link>
          <Link component={NavLink} to="/projects" draggable={false}><Typography fontSize={{md: 15, lg: 16,xl: 17}}>Projects</Typography></Link>
          <Link component={NavLink} to="/about" draggable={false}><Typography fontSize={{md: 15, lg: 16,xl: 17}}>About</Typography></Link>
          <Link component={NavLink} to="/contact" draggable={false}><Typography fontSize={{md: 15, lg: 16, xl: 17}}>Contact</Typography></Link>
        </Grid>
        <Grid 
          item 
          xs={11}
          sx={{
            ml: {xs:0, md:"auto"}, 
            display:{xs: "flex", md: "none"}, 
            justifyContent: "right",
          }} 
        >
          <IconButton sx={{display: {md:"none"}, ml: "auto", opacity: .75}} size="small" color="primary" onClick={() => setShowModal(true)} disableFocusRipple disableRipple disableTouchRipple>
            <MenuIcon sx={{fontSize: 35, filter: "drop-shadow(1px 1px 3px rgba(200,200,200,.15))"}}/>
          </IconButton>
        </Grid>
      </Grid>
      <LinksModal open={showModal} onClose={() => setShowModal(false)}/>
    </AppBar>
  )
}

export default Navbar