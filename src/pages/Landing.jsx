import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer'
import { Grid, Typography, Link, Stack, IconButton, Box, Tooltip } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const linkStyles = {
  fontSize: "1.8rem",
  fontWeight: 100,
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
        <Grid container sx={{height: "100%", px: 5}}>
          <Grid item mt={11} xs={12} sm={6}>
            <Typography variant="h1" sx={nameStyles}>Paolo</Typography>
            <Typography variant="h1" sx={nameStyles}>Bugarin</Typography>
            <Typography 
              variant="h5"
              sx={{
                mt:8,
                fontWeight: 300, 
                opacity: 1, 
                mixBlendMode: "difference", 
                letterSpacing: 2
              }}
            >
              {`< `}FULL STACK DEVELOPER{` />`}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={.75} alignItems="flex-end" justifyContent="center" pt={20} sx={{height: "100%"}}>
              <Box sx={{border: 1, mixBlendMode: "difference"}} my={4}>
                <IconButton size="large" onClick={() => navigate("/home")} >
                  <ArrowForwardIosIcon fontSize="medium" color="primary"/>
                </IconButton>
              </Box>
              <Link component={ReactLink} to="/home" draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
              <Link component={ReactLink} to="/projects" draggable={false}><Typography sx={linkStyles}>Projects</Typography></Link>
              <Link component={ReactLink} to="/about" draggable={false}><Typography sx={linkStyles}>About</Typography></Link>
              <Link component={ReactLink} to="/services" draggable={false}><Typography sx={linkStyles}>Services</Typography></Link>
              <Link component={ReactLink} to="/contact" draggable={false}><Typography sx={linkStyles}>Contact</Typography></Link>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{display: "flex", gap: 1}}>
              <Tooltip title="Github" arrow enterDelay={500}>
                <IconButton size="large" target="_blank" href="https://github.com/Paolo876" sx={{mixBlendMode: "difference"}}>
                  <GitHubIcon fontSize="medium" color="primary"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn" arrow enterDelay={500}>
                <IconButton size="large" target="_blank" href="https://www.linkedin.com/in/paolo-bugarin/" sx={{mixBlendMode: "difference"}}>
                  <LinkedInIcon fontSize="medium" color="primary"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Facebook" arrow enterDelay={500}>
                <IconButton size="large" target="_blank" href="https://www.facebook.com/paolobugarin19/" sx={{mixBlendMode: "difference"}}>
                  <FacebookIcon fontSize="medium" color="primary"/>
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
    </PageContainer>
  )
}

export default Landing