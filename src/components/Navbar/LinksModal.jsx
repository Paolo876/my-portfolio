import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Modal, Box, Typography, Link, Container, IconButton, Fade, Stack } from '@mui/material'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import "./navbar.scss";

const styles = {
  height: "100%",
  width: "100%",
  backdropFilter: "blur(8px) contrast(20%) brightness(36%)",
  border: 0,
  position: "relative",
}


const linkStyles = {
  fontSize: { xs: "1.35rem", sm: "2rem"},
  my: { xs:1.5, sm: 2.75 },
  ml: 2.5,
  fontWeight: 400,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: {xs: 1.25, sm: 2},
  width: "fit-content",
  opacity: .7,
  mixBlendMode: "difference",
  transition: "all 200ms linear",
  fontFamily: "Manrope",
}


const LinksModal = ({ open, onClose}) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const handleClick = (url) => {
    onClose();
    navigate(url)
  }


  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open} timeout={{enter: 600, exit: 600, appear: 1000}}>
        <Box sx={styles} className="navbar-modal">
          <Container maxWidth="xl" sx={{height: "92vh"}}>
            <Stack sx={{height: "100%"}}>
              <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, sm:1.5, lg: 1.5, xl: 3 }, py:{xs:.65, sm:1.15, md: 1.75, xl: 2 }, alignItems: "center"}}>
                <Link onClick={() => handleClick("/")}>
                  <Typography fontSize={{xs: 14, sm: 15, md: 16}} variant="h3">PB</Typography>
                </Link>
                <IconButton sx={{display: {md:"none"}, ml: "auto", opacity: .75}} size="small" color="primary" onClick={onClose}>
                  <PanoramaFishEyeIcon/>
                </IconButton>
              </Box>
              <Box sx={{mt: "auto"}} className="link-items">
                <Link onClick={() => handleClick("/home")} className={location.pathname === "/home" ? "active" : ""} draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
                <Link onClick={() => handleClick("/projects")} className={location.pathname === "/projects" ? "active" : ""} draggable={false} ><Typography sx={linkStyles}>Projects</Typography></Link>
                <Link onClick={() => handleClick("/about")} className={location.pathname === "/about" ? "active" : ""} draggable={false} ><Typography sx={linkStyles}>About</Typography></Link>
                <Link onClick={() => handleClick("/contact")} className={location.pathname === "/contact" ? "active" : ""} draggable={false} ><Typography sx={linkStyles}>Contact</Typography></Link>
              </Box>
            </Stack>

          </Container>
        </Box>
      </Fade>
    </Modal>
  )
}

export default LinksModal