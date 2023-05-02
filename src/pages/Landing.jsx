import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Typography, Link, Stack, IconButton, Box, Container } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../components/SocialLinks';
import DocumentHead from '../components/DocumentHead';


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
  mixBlendMode: "difference", 
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.6rem", sm: "7rem", md: "8rem", lg: "10rem", xl:"11rem" },
  lineHeight: .85,
  userSelect: "none",
}

const boxStyles = {
  backgroundColor: "rgba(255,255,255,1)",
  opacity: .0,
  mixBlendMode: "difference",
  height: 4,
  width: 4,
  position: "absolute",
  bottom: 1,
  right: -10,
}

const Landing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.onwheel = e => {
      if(e.deltaY > 0){
        navigate("/home")
      }
    }
  
    return () => {
      window.onwheel = null;
    };
  }, []);


  return (
    <Container maxWidth="xl" sx={{pt: 8, height: "93vh", px:0}}>
      <DocumentHead
        title="Paolo Bugarin | Developer"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container sx={{px: {xs: 1, lg: 2}, height: "100%" }}>
        <Grid item pt={{xs: 7, md:11}} xs={12} sm={8} sx={{minHeight: {xs: "fit-content", sm: "65vh",md:"70vh"}}}>
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
              <Link component={ReactLink} to="/home" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Home</Typography><Box sx={boxStyles}></Box></Link>
              <Link component={ReactLink} to="/projects" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Projects</Typography><Box sx={boxStyles}></Box></Link>
              <Link component={ReactLink} to="/about" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>About</Typography><Box sx={boxStyles}></Box></Link>
              <Link component={ReactLink} to="/contact" draggable={false} sx={{position: "relative"}}><Typography sx={linkStyles}>Contact</Typography><Box sx={boxStyles}></Box></Link>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} item sx={{ mt: "auto", align: "left", opacity: .75}} pb={1}>
          <SocialLinks />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Landing