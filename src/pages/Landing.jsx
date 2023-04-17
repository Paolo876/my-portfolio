import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer'
import { Grid, Typography, Link, Stack, IconButton, Box } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SocialLinks from '../components/SocialLinks';
import DocumentHead from '../components/DocumentHead';


const linkStyles = {
  fontSize: "1.8rem",
  fontWeight: 300,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: 1,
  width: "fit-content",
  color: "primary.main",
  opacity: .75
}

const nameStyles = {
  opacity: .9, 
  mixBlendMode: "difference", 
  textTransform: "none",
  fontWeight: 800,
  fontSize:{ md: "8rem", lg: "9rem", xl:"11rem" },
  lineHeight: .85,
  letterSpacing: .1
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
      <Grid container sx={{height: "100%", px: 2}}>
        <Grid item mt={11} xs={12} sm={6} sx={{minHeight: "70vh"}}>
          <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
          <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
          <Typography 
            variant="h5"
            sx={{
              mt:10 ,
              fontWeight: 200, 
              fontSize: "1.5rem",
              opacity: .75, 
              mixBlendMode: "difference", 
              letterSpacing: 1.25,
              textTransform: "none"
            }}
          >
            {`< `}Full Stack Web Developer{` />`}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} mt="auto">
          <Stack spacing={1.5} alignItems="flex-end" sx={{height: "100%"}}>
            <Box sx={{border: 0, opacity: .9}} mb={6}>
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
        <Box>
          <SocialLinks/>

        </Box>
      </Grid>
    </PageContainer>
  )
}

export default Landing