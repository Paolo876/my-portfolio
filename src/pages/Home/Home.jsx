import React from 'react'
import PageContainer from '../../components/PageContainer'
import SkillsShowcase from './SkillsShowcase';

import { Grid, Typography, Box, Button} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaceIcon from '@mui/icons-material/Place';

const Home = () => {
  return (
    <PageContainer>
      <Grid container sx={{px: 5,  justifyContent: "center", pt: "5%", overflowY: "auto"}}>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} md={2}>
          <Box sx={{border: 3, borderRadius: "50%", height: 180, width: 180, display: "flex", alignItems: "center", justifyContent: "center", mixBlendMode: "difference", mx: "auto", mt: 2}}>
            <Typography >image-here</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography fontSize={28} fontWeight={400}>My name is Paolo Bugarin,</Typography>
            <Typography fontSize={22} mt={1}>I am a Full Stack Web Developer based in Los Angeles, California.<PlaceIcon fontSize="inherit"/></Typography>
            <Typography fontSize={16} mt={1.5}>I design and develop websites from a simple static page to a complex dynamic web application.</Typography>

            <Typography fontSize={15} mt={.5} lineHeight={1.75}>
              I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College.
              A big part of my development knowledge also came from self-studying through varieties of online courses and being a part of coding groups.
            </Typography>
          </Box>
          <Box sx={{mt:2}} align="right">
            <Button variant="outlined" sx={{mixBlendMode: "difference", fontWeight: 400}} color="inherit" endIcon={<KeyboardArrowRightIcon color="primary"/>}>Read More About Me</Button>
          </Box>
          
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          <Box mt={8}>
            <Typography fontSize={15}>I mainly develop my projects using ReactJS or NextJS in the Front End, and NodeJS and ExpressJS on the Backend along with related libraries and frameworks.</Typography>
            <Typography mt={1} fontWeight={200}  fontSize={14}>Here are my primary arsenal of expertise: </Typography>
            <SkillsShowcase/>
          </Box>
          <Box sx={{mt:1}}>
            <Button variant="outlined" sx={{mixBlendMode: "difference", fontWeight: 400}} color="inherit" endIcon={<KeyboardArrowDownIcon color="primary"/>}>See My Works</Button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>

      </Grid>

    </PageContainer>
  )
}

export default Home