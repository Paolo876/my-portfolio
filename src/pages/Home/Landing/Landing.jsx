import { Grid, Typography, Link, IconButton, Box, Fade } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../../../components/SocialLinks';
import FirstName from './FirstName';
import { keyframes } from '@mui/system';


const linkStyles = {
  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" },
  my: { xs:3, sm: 3, md: 3, lg: 3 },
  borderRight: 2, 
  borderColor: "primary.dark",
  width: "fit-content",
  pr: 2.5,
  lineHeight: 1,
  fontWeight: 500,
  textAlign: "right",
  // textTransform: "none",
  letterSpacing: {xs: 2.5, sm:3, md: 3},
  width: "fit-content",
  opacity: .8,
  transition: "all 200ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.85)",
    transform: "scale(1.025) translateX(-2px)",
    borderColor: "primary.main",
    letterSpacing: {xs: .5, sm: .8, md: 3.2},
  }
}

const nameStyles = {
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.6rem", sm: "8.5rem", md: "10.5rem", lg: "10.5rem", xl: "11rem" },
  lineHeight: .85,
  letterSpacing: -2.5,
  userSelect: "none",
  opacity: .9,
  textShadow: "1px 1px 3px rgba(200,200,200,.4)",
}

const subHeaderStyles = {
  fontWeight: 200, 
  fontSize: { xs: "1rem", sm: "1.45rem", md: "1.65rem", lg: "1.45rem", xl:"1.5rem" },
  opacity: .5, 
  mixBlendMode: "difference", 
  letterSpacing: .5,
  textTransform: "none",
  userSelect: "none"
}

const subHeaderSymbolStyles = {
  opacity: .45,
  fontWeight: 600,
}


const slideRight = keyframes`
  0% {
    transform: translateX(-3em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const buttonAnimation = keyframes`
0% {
  transform: translateY(-.7em);
}
100% {
  transform: translateX(0) scale(1.025);
}
`;


const Landing = ({ subIntroRef }) => {


  return (
    <Box
      sx={{
        height: {xs: "92vh", md:"96vh"}, 
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: { xs:8, sm: 12, md: 13, lg: 15, xl: 15 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container sx={{maxWidth: "1500px", mx: "auto", height: {md: "fit-content", lg:"90%"}, my: "auto"}}>
        <Grid item xs={12} lg={8} sx={{display: "flex", flexDirection: "column", justifyContent: {lg:"space-between"}, pb: {xs: 4, sm:6}}}>
        {/* <FirstName/> */}
        {/* <img src={firstname}/> */}
          <Box>
            <Fade appear={true} in={true} timeout={1100}  style={{ transitionDelay: "200ms" }}>
              <Box><Typography variant="h1" sx={nameStyles}>Paolo</Typography></Box>
            </Fade>
            <Fade appear={true} in={true} timeout={1100}  style={{ transitionDelay: "600ms" }}>
              <Box><Typography variant="h1" sx={nameStyles}>Bugarin</Typography></Box>
            </Fade>
          </Box>
          <Box mt={{ xs: 4.5, sm: 5, md: 15, lg: 13, xl:15 }} ml={{sm:1.5}}>
            <Fade appear={true} in={true} timeout={800}  style={{ transitionDelay: "1400ms" }}>
              <Box>
                <Typography variant="h5" sx={subHeaderStyles}>
                  <Box component="span" sx={subHeaderSymbolStyles}>{`<`}</Box> Full Stack Web Developer <Box component="span" sx={subHeaderSymbolStyles}>{`>`}</Box>
                </Typography>
              </Box>
            </Fade>
            <Fade appear={true} in={true} timeout={800}  style={{ transitionDelay: "1650ms" }}>
              <Box>
                <Typography variant="h5" sx={subHeaderStyles} mt={1.5}>
                  <Box component="span" sx={subHeaderSymbolStyles}>{`<`}</Box> Los Angeles, CA <Box component="span" sx={subHeaderSymbolStyles}>{`>`}</Box>
                </Typography>
              </Box>
            </Fade>
          </Box>
          <Fade appear={true} in={true} timeout={800}  style={{ transitionDelay: "2100ms" }}>

          <Box sx={{width: "fit-content", display: {xs: "initial", lg: "none"}}} mt={{xs: 2, sm:9}} ml={{sm:1.5}}>
            <SocialLinks 
              flexDirection='row' 
              color="inherit" 
              gap={{md:1.5, lg:.25}}
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
          </Fade>
        </Grid>
        <Grid item xs={12} lg={4} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", pb: {sm: 3}, pt: {xs:2, sm: 3}}}>
        <Fade
          in={true}
          style={{ transitionDelay: "1900ms"  }}
          timeout={500}
        >
          <Box sx={{width: "fit-content", ml: "auto", display: {xs: "none", lg: "initial"}}}>
            <SocialLinks 
              flexDirection='column' 
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
          </Fade>
          <Box align="right" sx={{width: "fit-content", ml: "auto"}}>
            <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 1450ms`}}>
              <Link component={ReactLink} to="/projects" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Projects</Typography></Link>
            </Box>
            <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 1650ms`}}>
              <Link component={ReactLink} to="/about" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>About</Typography></Link>
            </Box>
            <Box sx={{opacity: 0, animation: `${slideRight} 900ms ease forwards 1850ms`}}>
              <Link component={ReactLink} to="/contact" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Contact</Typography></Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Fade appear={true} in={true} timeout={700}  style={{ transitionDelay: "3200ms" }}>
        <Box>
          <Box 
            sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", animation: `${buttonAnimation} 1000ms linear infinite alternate`}}
            >
            <IconButton 
              size="large" 
              onClick={() => subIntroRef.current.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"})} 
              color="primary" 
              sx={{
                transform: "rotate(90deg) scale(1)",
                transition: "all 450ms ease-in-out",
                opacity: .85,
                "&:hover" : {
                  transform: "rotate(90deg) scale(1.1) translateX(.1em)",
                  filter: "brightness(1.15)",
                  opacity: 1,
                },
              }} 
              disableRipple
            >
              <ArrowForwardIosIcon sx={{fontSize: {xs: 28, sm: 35, md: 38, lg: 40, xl: 40}}}/>
            </IconButton>
          </Box>

        </Box>
      </Fade>
    </Box>
  )
}

export default Landing