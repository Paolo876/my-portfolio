import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Modal, Box, Typography, Link, Container, IconButton, Fade, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import SocialLinks from '../SocialLinks';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import "./navbar.scss";
import Image from 'mui-image';
import logo from "../../assets/logo.svg";


const styles = {
  height: "100%",
  width: "100%",
  backdropFilter: "blur(3px) contrast(10%) brightness(12%)",
  border: 0,
  position: "relative",
}

const linkStyles = {
  fontSize: { xs: "1.05rem", sm: "1.45rem"},
  my: {xs: 2.5, sm:3.25},
  ml: 2.5,
  fontWeight: 400,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: .8,
  width: "fit-content",
  opacity: .85,
  textShadow: "1px 1px 3px rgba(100,100,100,.5)",
  // mixBlendMode: "difference",
  transition: "all 200ms linear",
}

const nameStyles = {
  mixBlendMode: "difference", 
  opacity: .05,
  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.25rem", sm: "8rem" },
  letterSpacing: -2,
  lineHeight: .85,
  userSelect: "none",
}


const slideRight = keyframes`
  0% {
    transform: translateX(-1em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const LinksModal = ({ open, onClose}) => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleClick = (url) => {
    onClose();
    if(url) navigate(url)
  }

  useEffect(() => {
    onClose();
  }, [location])


  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open} timeout={{enter: 350, exit: 350}}>
        <Box sx={styles} className="navbar-modal">
          <Container maxWidth="xl" sx={{height: "90vh"}}>
            <Stack sx={{height: "100%"}} onClick={() => handleClick()}>
              <Box sx={{display: "flex", flexDirection: "row", px:{xs:0, lg: 1.5, xl: 3 }, py:{xs:.65, sm:1.15, md: 1.75, xl: 2 }, alignItems: "center"}}>
                <Link onClick={() => handleClick("/")}>
                <Box sx={{height: 45, width: "auto", my: "auto", ml: .5, opacity: .8, transition: "800ms all ease", transform: "scale(.95)","&:hover": {opacity: 1, transform: "scale(1)"}}}>
                  <Image src={logo} fit='scale-down'/>
                </Box>
                </Link>
                <IconButton sx={{display: {md:"none"}, ml: "auto", opacity: .75}} size="small" color="primary" onClick={onClose}>
                  <PanoramaFishEyeIcon sx={{fontSize: 35, filter: "drop-shadow(1px 1px 3px rgba(209,145,25,.35))"}}/>
                </IconButton>
              </Box>
              <Box sx={{mt: 5, mr: 2}} className="link-items" align="right">
                <Box sx={{opacity: 0, animation: `${slideRight} 800ms ease forwards 250ms`}}>
                  <Link onClick={() => handleClick("/")} className={location.pathname === "/" ? "active" : ""} draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
                </Box>
                <Box sx={{opacity: 0, animation: `${slideRight} 800ms ease forwards 400ms`}}>
                  <Link onClick={() => handleClick("/projects")} className={location.pathname === "/projects" ? "active" : ""} draggable={false} ><Typography sx={linkStyles}>Projects</Typography></Link>
                </Box>
                <Box sx={{opacity: 0, animation: `${slideRight} 800ms ease forwards 650ms`}}>
                  <Link onClick={() => handleClick("/about")} className={location.pathname === "/about" ? "active" : ""} draggable={false} ><Typography sx={linkStyles}>About</Typography></Link>
                </Box>
                <Box sx={{opacity: 0, animation: `${slideRight} 800ms ease forwards 800ms`}}>
                  <Link onClick={() => handleClick("/contact")} className={location.pathname === "/contact" ? "active" : ""} draggable={false} ><Typography sx={linkStyles}>Contact</Typography></Link>
                </Box>
              </Box>
              <Box mt="auto" align="left">
                <Fade in={open} timeout={1200} style={{transitionDelay: "1350ms"}}>
                  <Box>
                    <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
                  </Box>
                </Fade>
                <Fade in={open} timeout={1200} style={{transitionDelay: "1650ms"}}>
                  <Box>
                    <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
                  </Box>
                </Fade>
              </Box>
              <Fade in={open} timeout={1200} style={{transitionDelay: "1950ms"}}>
                <Box sx={{mt: {xs:4, sm: 5}, opacity: .85, mr: {xs: 1, sm:1}}}>
                  <SocialLinks 
                    flexDirection='row' 
                    color="inherit" 
                    gap={{xs: .85, sm: 1}}
                    placement="left"
                    additionalStyles={{
                      opacity: .75,
                      transition: "all 150ms ease-in-out",
                      transform: "scale(1.1)",
                      "&:hover": {
                        opacity: 1,
                        transform: "scale(1.15)",
                        color: "primary.light",
                      }
                    }}
                  />              
                </Box>
              </Fade>
            </Stack>
          </Container>
        </Box>
      </Fade>
    </Modal>
  )
}

export default LinksModal