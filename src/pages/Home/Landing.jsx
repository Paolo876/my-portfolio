import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Link, IconButton, Box } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../../components/SocialLinks';

const linkStyles = {
  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.6rem", lg: "1.8rem", xl:"1.8rem" },
  my: { xs:1.75, sm: 2, md: 2 },
  fontWeight: 500,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: {xs: 1.75, md: 2, lg: 2.5},
  width: "fit-content",
  opacity: .65,
  transition: "all 150ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.05)"
  }
}

const nameStyles = {
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.6rem", sm: "7rem", md: "8rem", lg: "10rem", xl:"12rem" },
  lineHeight: .9,
  letterSpacing: -1,
  userSelect: "none",
  textShadow: "1px 1px 3px rgba(100,100,100,.25)",
}

const subHeaderStyles = {
  fontWeight: 200, 
  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem", xl:"1.6rem" },
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
        height: "96vh", 
        position: "relative", 
        px: { xs:0, sm: 1, md: 1, lg: 2.25, xl: 3 }, 
        pt: { xs:8, sm: 12, md: 13, lg: 15, xl: 15 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "90%", px: {md: 0,lg:2}}}>
        <Grid item xs={12} sm={8} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", pb: 6}}>
          <Box>
            <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
            <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
          </Box>
          <Box mt={{ xs: 4.5, sm: 5, md: 5, lg: 13, xl:15 }} ml={1.5}>
            <Typography variant="h5" sx={subHeaderStyles}>
              <Box component="span" sx={subHeaderSymbolStyles}>{`<`}</Box> Full Stack Web Developer <Box component="span" sx={subHeaderSymbolStyles}>{`>`}</Box>
            </Typography>
            <Typography variant="h5" sx={subHeaderStyles} mt={1.5}>
              <Box component="span" sx={subHeaderSymbolStyles}>{`<`}</Box> Los Angeles, CA <Box component="span" sx={subHeaderSymbolStyles}>{`>`}</Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", py: 3}}>
          <Box sx={{width: "fit-content", ml: "auto"}}>
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
          <Box align="right">
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
            transition: "all 300ms ease-in-out",
            "&:hover" : {
              transform: "rotate(90deg) scale(1.3) translateX(.15em)",
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