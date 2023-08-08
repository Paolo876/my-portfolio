import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Link, IconButton, Box, Fade, Grow } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../../components/SocialLinks';

const linkStyles = {
  fontSize: { xs: "1.3rem", sm: "1.75rem", md: "1.8rem", lg: "1.8rem", xl:"1.8rem" },
  my: { xs:2.5, sm: 3.5, md: 4, lg: 4 },
  borderRight: 2, 
  borderColor: "primary.dark",
  width: "fit-content",
  pr: 2,
  lineHeight: 1,
  fontWeight: 500,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: .5,
  width: "fit-content",
  opacity: .75,
  transition: "all 200ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.05)",
    borderColor: "primary.main",
    letterSpacing: 1,
  }
}

const nameStyles = {
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.6rem", sm: "8.5rem", md: "10.5rem", lg: "10.5rem" },
  lineHeight: .9,
  letterSpacing: -2.5,
  userSelect: "none",
  opacity: .85,
  textShadow: "1px 1px 3px rgba(200,200,200,.4)",
}

const subHeaderStyles = {
  fontWeight: 200, 
  fontSize: { xs: "1rem", sm: "1.5rem", md: "1.7rem", lg: "1.6rem", xl:"1.6rem" },
  opacity: .55, 
  mixBlendMode: "difference", 
  letterSpacing: .5,
  textTransform: "none",
  userSelect: "none"
}

const subHeaderSymbolStyles = {
  opacity: .5,
  fontWeight: 600,
}


const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: {xs: "95vh", md:"96vh"}, 
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
          <Box>
            <Fade appear={true} in={true} timeout={1100}  style={{ transitionDelay: "200ms" }}>
              <Box><Typography variant="h1" sx={nameStyles}>Paolo</Typography></Box>
            </Fade>
            <Fade appear={true} in={true} timeout={1100}  style={{ transitionDelay: "600ms" }}>
              <Box><Typography variant="h1" sx={nameStyles}>Bugarin</Typography></Box>
            </Fade>
          </Box>
          <Box mt={{ xs: 4.5, sm: 5, md: 15, lg: 13, xl:15 }} ml={{sm:1.5}}>
            <Fade appear={true} in={true} timeout={700}  style={{ transitionDelay: "1400ms" }}>
              <Box>
                <Typography variant="h5" sx={subHeaderStyles}>
                  <Box component="span" sx={subHeaderSymbolStyles}>{`<`}</Box> Full Stack Web Developer <Box component="span" sx={subHeaderSymbolStyles}>{`>`}</Box>
                </Typography>
              </Box>
            </Fade>
            <Fade appear={true} in={true} timeout={700}  style={{ transitionDelay: "1600ms" }}>
              <Box>
                <Typography variant="h5" sx={subHeaderStyles} mt={1.5}>
                  <Box component="span" sx={subHeaderSymbolStyles}>{`<`}</Box> Los Angeles, CA <Box component="span" sx={subHeaderSymbolStyles}>{`>`}</Box>
                </Typography>
              </Box>
            </Fade>
          </Box>
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
        </Grid>
        <Grid item xs={12} lg={4} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", py: {sm: 3}}}>
        <Grow
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
          </Grow>
          <Box align="right" sx={{width: "fit-content", ml: "auto"}}>
            <Link component={ReactLink} to="/projects" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Projects</Typography></Link>
            <Link component={ReactLink} to="/about" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>About</Typography></Link>
            <Link component={ReactLink} to="/contact" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Contact</Typography></Link>
          </Box>
        </Grid>
      </Grid>
      <Box 
        sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}
        >
        <IconButton 
          size="large" 
          onClick={() => navigate("/home")} 
          color="primary" 
          sx={{
            transform: "rotate(90deg) scale(1.15)",
            transition: "all 200ms ease-in-out",
            "&:hover" : {
              transform: "rotate(90deg) scale(1.25) translateX(.1em)",
              filter: "brightness(1.15)"
            },
          }} 
          disableRipple
        >
          <ArrowForwardIosIcon fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Landing