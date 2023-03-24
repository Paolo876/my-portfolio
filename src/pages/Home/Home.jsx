import React from 'react'
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer'
import SkillsShowcase from './SkillsShowcase';
import SocialLinks from '../../components/SocialLinks';

import { Grid, Typography, Box, Button} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaceIcon from '@mui/icons-material/Place';


const Home = () => {
  const navigate = useNavigate();


  return (
    <PageContainer>
      <Grid container sx={{px: 5,  justifyContent: "center", pt: "5%", overflowY: "auto", alignItems: "center"}}>
        <Grid item xs={2.25}></Grid>
        <Grid item xs={12} md={2}>
          <Box sx={{border: 3, borderRadius: "50%", height: 180, width: 180, display: "flex", alignItems: "center", justifyContent: "center", mixBlendMode: "difference", mx: "auto", mt: 2}}>
            <Typography >image-here</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Box>
            <Box>
              <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18, mixBlendMode: "difference"}}>Hello! My name is </Typography>
              <Typography sx={{display: "inline", fontWeight: 600, fontSize: 40, letterSpacing: .75, ml: .25}}>Paolo Bugarin</Typography>
              <Typography sx={{display: "inline", fontWeight: 300, fontSize: 20, ml: .25}}>, </Typography>
            </Box>
            <Box mt={.25}>
              <Typography sx={{display: "inline", fontWeight: 300, fontSize: 18}}>I am a Full Stack Web Developer based in </Typography>
              <Typography sx={{display: "inline", fontWeight: 400, fontSize: 25}}>Los Angeles, California.<PlaceIcon fontSize="inherit"/></Typography>
            </Box>
            <Typography fontSize={14.5} mt={.5}>I design and develop websites from a simple static page to a complex dynamic web application.</Typography>
            {/* <Typography fontSize={15} mt={.5} lineHeight={1.75}>
              I studied Computer Information Systems major in Web Development and Software Development at Pasadena City College.
              A big part of my development knowledge also came from self-studying through varieties of online courses and being a part of coding groups.
            </Typography> */}
          </Box>
          <Box sx={{mt:2, display: "flex", alignItems: "center", justifyContent: "space-between", gap:1}} align="right">
            <SocialLinks iconSize="small" gap={0} buttonSize="medium"/>
            <Button 
              variant="outlined" 
              sx={{mixBlendMode: "difference", fontWeight: 400}} 
              color="inherit" 
              endIcon={<KeyboardArrowRightIcon color="primary"/>}
              onClick={() => navigate("/about")}
            >
              Read More About Me
            </Button>
          </Box>
          
        </Grid>
        <Grid item xs={2.25}></Grid>
        <Grid item xs={2.25}></Grid>

        <Grid item xs={7.5}>
          <Box mt={8}>
            <Typography fontSize={15}>I mainly develop my projects using ReactJS or NextJS in the Front End, and NodeJS and ExpressJS on the Backend along with related libraries and frameworks.</Typography>
            <Typography mt={1} fontWeight={200}  fontSize={14}>Here are my primary arsenal of expertise: </Typography>
            <SkillsShowcase/>
          </Box>
          <Box sx={{mt:1}}>
            <Button 
              variant="outlined" 
              sx={{mixBlendMode: "difference", fontWeight: 400}} 
              color="inherit" 
              endIcon={<KeyboardArrowDownIcon color="primary"/>}
              onClick={() => navigate("/projects")}
            >
              See My Works
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2.25}></Grid>

      </Grid>

    </PageContainer>
  )
}

export default Home