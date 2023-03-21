import React from 'react'
import PageContainer from '../components/PageContainer'
import { Grid, Typography, Link } from '@mui/material'
import { NavLink, Link as ReactLink } from 'react-router-dom';


const Landing = () => {
  return (
    <PageContainer>
        <Grid container sx={{height: "100%"}}>
          <Grid item mt={5} md={6}>
            <Typography fontWeight={600} fontSize={"8rem"} lineHeight={.85} sx={{opacity: 1, mixBlendMode: "difference"}}>Paolo</Typography>
            <Typography fontWeight={700} fontSize={"8rem"} lineHeight={.85} sx={{opacity: 1, mixBlendMode: "difference"}}>Bugarin</Typography>
            <Typography fontWeight={300} variant="h6" sx={{opacity: 1, mixBlendMode: "difference", letterSpacing: 1}} mt={2.5}>FULL STACK WEB DEVELOPER</Typography>
          </Grid>
          <Grid item md={6}>
            {/* links -right side */}
          </Grid>
        </Grid>
    </PageContainer>
  )
}

export default Landing