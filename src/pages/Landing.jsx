import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer'
import { Grid, Typography, Link, Stack, IconButton, Box } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../components/SocialLinks';
import DocumentHead from '../components/DocumentHead';


const linkStyles = {
  fontSize: { sm: "1.3rem", md: "1.5rem", lg: "1.6rem", xl:"1.8rem" },
  fontWeight: 400,
  textAlign: "right",
  textTransform: "none",
  // letterSpacing: .5,
  width: "fit-content",
  color: "primary.main",
  opacity: .7
  // mixBlendMode: "difference"
}

const nameStyles = {
  opacity: .9, 
  mixBlendMode: "difference", 
  textTransform: "none",
  fontWeight: 800,
  fontSize: { xs:"5.5rem", sm: "7rem", md: "8rem", lg: "10rem", xl:"11rem" },
  lineHeight: .85,
  letterSpacing: .1,
  userSelect: "none"
}

const Landing = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <DocumentHead
        title="Paolo Bugarin | Developer"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container sx={{height: "100%", px: {xs: .5, md: 2}}}>
        <Grid item mt={11} xs={12} sm={8} sx={{minHeight: {xs: "fit-content", sm:"70vh"}}}>
          <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
          <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
          <Typography 
            variant="h5"
            sx={{
              mt:{ xs: 4, sm: 5, md: 5, lg: 7, xl:10 } ,
              fontWeight: 200, 
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.3rem", lg: "1.4rem", xl:"1.5rem" },
              opacity: .75, 
              mixBlendMode: "difference", 
              letterSpacing: { xs: .5, md: 1.25, lg: 1.25, xl:1.25 },
              textTransform: "none",
              userSelect: "none"

            }}
          >
            {`< `}Full Stack Web Developer{` />`}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} mt="auto">
          <Stack spacing={1.5} alignItems="flex-end" sx={{height: "100%"}}>
            <Box sx={{border: 0, opacity: .9, display: {xs: "none", md: "initial"}}} mb={6}>
              <IconButton size="large" onClick={() => navigate("/home")} color="secondary">
                <ArrowForwardIosIcon fontSize="large"/>
              </IconButton>
            </Box>
            <Link component={ReactLink} to="/home" draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
            <Link component={ReactLink} to="/projects" draggable={false}><Typography sx={linkStyles}>Projects</Typography></Link>
            <Link component={ReactLink} to="/about" draggable={false}><Typography sx={linkStyles}>About</Typography></Link>
            <Link component={ReactLink} to="/contact" draggable={false}><Typography sx={linkStyles}>Contact</Typography></Link>
          </Stack>
        </Grid>
        <Box sx={{transform: {xs: "scale(.8)", sm: "scale(.9)", md: "scale(1)"}}}>
          <SocialLinks/>
        </Box>
      </Grid>
    </PageContainer>
  )
}

export default Landing