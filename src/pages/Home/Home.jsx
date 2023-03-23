import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Grid, Typography, Box, Button} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Home = () => {
  return (
    <PageContainer>
      <Grid container sx={{height: "100%", px: 5,  justifyContent: "center", pt: "15%"}}>
        <Grid item xs={12} md={2}>
          <Box sx={{border: 3, borderRadius: "50%", height: 150, width: 150, display: "flex", alignItems: "center", justifyContent: "center", mixBlendMode: "difference", mx: "auto"}}>
            <Typography >image-here</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography>My name is Paolo Bugarin, I am a Full Stack Web Developer based in Los Angeles, California.</Typography>
            <Typography>I design and develop websites from a simple static page to a complex dynamic web application.</Typography>

            {/* <Typography>
              I studied Computer Information Systems majoring in Web Development and Software Development at Pasadena City College.
              A big part of my development knowledge also came from self-studying through varieties of online courses and being a part of coding groups.
            </Typography> */}
          </Box>
          <Box>
            <Button variant="outlined" sx={{mixBlendMode: "difference", fontWeight: 400}} color="inherit" endIcon={<KeyboardArrowRightIcon color="primary"/>}>Read More About Me</Button>
          </Box>
          <Box>
            <Typography>I mainly develop my projects using ReactJS or NextJS in the Front End, and NodeJS and ExpressJS on the Backend along with related libraries and frameworks.</Typography>
            <Typography>Here are some of my arsenal of expertise: </Typography>

          </Box>
          <Box>
            <Button variant="outlined" sx={{mixBlendMode: "difference", fontWeight: 400}} color="inherit" endIcon={<KeyboardArrowDownIcon color="primary"/>}>See My Works</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>

    </PageContainer>
  )
}

export default Home