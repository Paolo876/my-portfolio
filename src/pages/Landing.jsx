import React from 'react'
import PageContainer from '../components/PageContainer'
import { Grid, Typography, Link, Stack } from '@mui/material'
import { NavLink, Link as ReactLink } from 'react-router-dom';

const linkStyles = {
  fontSize: "1.5rem",
  fontWeight: 200,
  textAlign: "right",
  textTransform: "none",
  mixBlendMode: "difference",
  letterSpacing: .5,
  width: "fit-content"
}


const Landing = () => {
  return (
    <PageContainer>
        <Grid container sx={{height: "100%"}}>
          <Grid item mt={5} md={6}>
            <Typography fontWeight={800} variant="h1" fontSize={"8rem"} lineHeight={.85} sx={{opacity: 1, mixBlendMode: "difference", textTransform: "none"}}>Paolo</Typography>
            <Typography fontWeight={800} variant="h1" fontSize={"8rem"} lineHeight={.85} sx={{opacity: 1, mixBlendMode: "difference", textTransform: "none"}}>Bugarin</Typography>
            <Typography fontWeight={300} variant="h6" sx={{opacity: 1, mixBlendMode: "difference", letterSpacing: 1}} mt={5}>FULL STACK DEVELOPER</Typography>
          </Grid>
          <Grid item md={6} >
            <Stack spacing={.75} alignItems="flex-end" justifyContent="center" sx={{height: "100%"}}>
              <Link component={NavLink} to="/home" draggable={false}><Typography sx={linkStyles}>Home</Typography></Link>
              <Link component={NavLink} to="/projects" draggable={false}><Typography sx={linkStyles}>Projects</Typography></Link>
              <Link component={NavLink} to="/about" draggable={false}><Typography sx={linkStyles}>About</Typography></Link>
              <Link component={NavLink} to="/services" draggable={false}><Typography sx={linkStyles}>Services</Typography></Link>
              <Link component={NavLink} to="/contact" draggable={false}><Typography sx={linkStyles}>Contact</Typography></Link>

            </Stack>
          </Grid>
        </Grid>
    </PageContainer>
  )
}

export default Landing