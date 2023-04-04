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
  fontWeight: 200,
  textAlign: "right",
  textTransform: "none",
  letterSpacing: 1,
  width: "fit-content"
}

const nameStyles = {
  opacity: .9, 
  mixBlendMode: "difference", 
  textTransform: "none",
  fontWeight: 800,
  fontSize:{ md: "8rem", lg: "9rem", xl:"10rem" },
  lineHeight: .85,
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
        <Grid container sx={{height: "100%", px: 5}}>
          <Grid item mt={11} xs={12} sm={6}>
            <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
            <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
            <Typography 
              variant="h5"
              sx={{
                mt:8,
                fontWeight: 300, 
                opacity: .75, 
                mixBlendMode: "difference", 
                letterSpacing: 2
              }}
              
            >
              {`< `}FULL STACK DEVELOPER{` />`}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1.5} alignItems="flex-end" justifyContent="center" pt={20} sx={{height: "100%"}}>
              <Box sx={{border: 1, mixBlendMode: "difference"}} my={4}>
                <IconButton size="large" onClick={() => navigate("/home")} >
                  <ArrowForwardIosIcon fontSize="medium" color="primary"/>
                </IconButton>
              </Box>
              <Link component={ReactLink} to="/home" draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
              <Link component={ReactLink} to="/projects" draggable={false}><Typography sx={linkStyles}>Projects</Typography></Link>
              <Link component={ReactLink} to="/about" draggable={false}><Typography sx={linkStyles}>About</Typography></Link>
              <Link component={ReactLink} to="/contact" draggable={false}><Typography sx={linkStyles}>Contact</Typography></Link>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <SocialLinks/>
          </Grid>
        </Grid>
    </PageContainer>
  )
}

export default Landing