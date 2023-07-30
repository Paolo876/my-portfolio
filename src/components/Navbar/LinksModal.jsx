import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Modal, Box, Typography, Link, Container, IconButton, Fade, Stack } from '@mui/material';
import SocialLinks from '../SocialLinks';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import "./navbar.scss";

const styles = {
  height: "100%",
  width: "100%",
  backdropFilter: "blur(3px) contrast(38%) brightness(20%)",
  border: 0,
  position: "relative",
}

const linkStyles = {
  fontSize: { xs: "1.2rem", sm: "1.8rem"},
  my: { xs:1.5, sm: 2.75 },
  ml: 2.5,
  fontWeight: 400,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: {xs: 1.1, sm: 1.5},
  width: "fit-content",
  opacity: .9,
  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
  mixBlendMode: "difference",
  transition: "all 200ms linear",
  fontFamily: "Manrope",
}

const nameStyles = {
  mixBlendMode: "difference", 
  opacity: .15,
  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.5rem", sm: "8rem" },
  letterSpacing: -2,
  lineHeight: .85,
  userSelect: "none",
}


const LinksModal = ({ open, onClose}) => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleClick = (url) => {
    onClose();
    navigate(url)
  }

  useEffect(() => {
    onClose();
  }, [location])


  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open} timeout={{enter: 350, exit: 350}}>
        <Box sx={styles} className="navbar-modal">
          <Container maxWidth="xl" sx={{height: "90vh"}}>
            <Stack sx={{height: "100%"}}>
              <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, sm:1.5, lg: 1.5, xl: 3 }, py:{xs:.65, sm:1.15, md: 1.75, xl: 2 }, alignItems: "center"}}>
                <Link onClick={() => handleClick("/")}>
                  <Typography fontSize={{xs: 14, sm: 15, md: 16}} variant="h3">PB</Typography>
                </Link>
                <IconButton sx={{display: {md:"none"}, ml: "auto", opacity: .75}} size="small" color="primary" onClick={onClose}>
                  <PanoramaFishEyeIcon sx={{fontSize: 35}}/>
                </IconButton>
              </Box>
              <Box sx={{mt: 6}} align="right">
                <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
                <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
              </Box>
              <Box sx={{ml: "auto", mt: {xs:5, sm: 6}, opacity: .75, mr: {xs: 0, sm:1}}}>
              <SocialLinks 
                flexDirection='row' 
                color="inherit" 
                gap={.25}
                placement="left"
                additionalStyles={{
                  opacity: .65,
                  transition: "all 150ms ease-in-out",
                  "&:hover": {
                    opacity: 1,
                    transform: "scale(1.15)",
                    color: "primary.light",
                  }
                }}
              />              
            </Box>
              <Box sx={{mt: "auto"}} className="link-items">
                <Link onClick={() => handleClick("/")} className={location.pathname === "/home" ? "active" : ""} draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
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