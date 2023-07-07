import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Link, Stack, IconButton, Box, Container } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../../components/SocialLinks';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const linkStyles = {
  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.3rem", lg: "1.3rem", xl:"1.3rem" },
  my: { xs:1.75, sm: 2 },
  fontWeight: 300,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: {xs: 1.25, md: 1.75},
  width: "fit-content",
  opacity: .7,
  mixBlendMode: "difference",
  transition: "all 200ms linear",
  fontFamily: "Manrope",
  "&:hover":{
    opacity:1,
    color: "secondary.light",
    textShadow: "1px 1px 3px rgba(150,150,150,.15)",
  }
}

const nameStyles = {
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.6rem", sm: "7rem", md: "8rem", lg: "10rem", xl:"12rem" },
  lineHeight: 1,
  letterSpacing: -.25,
  userSelect: "none",
  textShadow: "1px 1px 10px rgba(0,0,0,0.25)"
}


const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: 8, 
        height: "93vh", 
        position: "relative", 
        px: { xs:0, sm: 1, md: 1, lg: 2.25, xl: 3 }, 
        py: { xs:8, sm: 10, md: 11, lg: 12, xl: 12 },
      }}
    >
      <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "100%", px: {md: 0,lg:2}}}>
        <Grid item xs={12} sm={8}>
          <Box>
            <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
            <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
          </Box>
          <Box mt={{ xs: 4.5, sm: 5, md: 5, lg: 7, xl:12 }} ml={1}>
            <Typography 
              variant="h5"
              sx={{
                fontWeight: 200, 
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem", xl:"1.8rem" },
                opacity: .6, 
                mixBlendMode: "difference", 
                letterSpacing: { xs: .5, md: 1.25, lg: 1.5, xl:2 },
                textTransform: "none",
                userSelect: "none"
              }}
            >
              {`< `}Full Stack Web Developer{` />`}
            </Typography>
          </Box>
        </Grid>
        {/* <Grid item pt={{xs: 7, md:11}} xs={12} sm={8} sx={{minHeight: {xs: "fit-content", sm: "65vh",md:"0vh"}}}>
          <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
          <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
          <Typography 
            variant="h5"
            sx={{
              mt:{ xs: 4.5, sm: 5, md: 5, lg: 7, xl:10 } ,
              fontWeight: 200, 
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem", xl:"1.7rem" },
              opacity: .7, 
              mixBlendMode: "difference", 
              letterSpacing: { xs: .5, md: 1.25, lg: 1.25, xl:1.5 },
              textTransform: "none",
              userSelect: "none"
            }}
          >
            {`< `}Full Stack Web Developer{` />`}
          </Typography>
          <Typography 
            variant="h6"
            sx={{
              mt:{ xs: 4.5, sm: 5, md: 5, lg: 7, xl:10 } ,
              fontWeight: 200, 
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem", xl:"1.7rem" },
              opacity: .7, 
              mixBlendMode: "difference", 
              letterSpacing: { xs: .5, md: 1.25, lg: 1.25, xl:1.5 },
              textTransform: "none",
              userSelect: "none"
            }}
          >
            Los Angeles, CA
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} mt="auto">
          <Stack spacing={{xs:2.5, md:1.8}} alignItems="flex-end" pr={{xs:1, sm:2, md:0}}>
            <Box 
              sx={{
                border: 1, 
                opacity: .75, 
                display: { xs: "none", sm: "initial" },
                borderColor: "rgba(255,255,255,.35)", 
                transition: "all 200ms linear",

                "&:hover": { 
                  borderColor: "rgba(255,255,255,.5)",
                  opacity: 1, 

                }
              }} 
              mb={6}
            >
              <IconButton size="large" onClick={() => navigate("/home")} color="primary">
                <ArrowForwardIosIcon fontSize="large"/>
              </IconButton>
            </Box>
            <Box align="right">
              <Link component={ReactLink} to="/projects" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Projects</Typography></Link>
              <Link component={ReactLink} to="/about" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>About</Typography></Link>
              <Link component={ReactLink} to="/contact" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Contact</Typography></Link>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} item sx={{ mt: "auto", align: "left", opacity: .75}} pb={1}>
          <SocialLinks />
        </Grid> */}
      </Grid>
    </Box>
  )
}

export default Landing