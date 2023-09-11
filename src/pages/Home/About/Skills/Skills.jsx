import React from 'react'
import SkillsDescription from './SkillsDescription';
import SkillsCarousel from './SkillsCarousel';
import { Grid, Box, Typography, Divider, Fade } from '@mui/material'
import { keyframes } from '@mui/system';


const slideLeft = keyframes`
  0% {
    transform: translateX(1.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const Skills = ({ isVisible }) => {

  return (
    <Grid container sx={{justifyContent: {xs:"center", md: "space-between"}, alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={8} mt={{xs: 5, sm:6}} mb={{xs: 3, sm:4}} sx={{display: {xs: "initial", md: "none"}}}><Divider/></Grid>
      <Grid item xs={12} sx={{display: {xs: "initial", md: "none"}}}>
        <Box mb={1.5}>
          <Typography 
            variant="h2" 
            fontWeight={400}
            fontSize={{xs: 25, sm: 30}} 
            letterSpacing={.5}
            lineHeight={{lg:1.6, xl:1.1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >
            My Expertise
          </Typography>
        </Box>
        <Box ml="auto" sx={{maxWidth: "100%", display: {xs: "initial", md: "none"}}}>
          <Typography 
            variant="body1" 
            sx={{
              fontSize: {xs: 10.5, sm: 13},
              fontWeight: 300,
              opacity: .55,
              letterSpacing: .4,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            My skillset is heavily focused on designing and developing web based applications. 
            However, I do have ample knowledge in software development, database management, and other related technologies.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={7} lg={7} mt={{xs: 1.5, md: 0}}>
        {isVisible && <SkillsCarousel/>}
      </Grid>
      <Grid item md={5} lg={5} sx={{display: {xs: "none", md: "initial"}}}>
        <SkillsDescription/>
      </Grid>
    </Grid>
    
  )
}

export default Skills