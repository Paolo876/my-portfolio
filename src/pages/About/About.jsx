import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Grid, Box } from '@mui/material'
import Introduction from './Introduction'
import AboutNavigation from './AboutNavigation'

const About = () => {
  return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
      <DocumentHead
        title="Paolo Bugarin | About"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Box>
        <Grid container mt={5} sx={{justifyContent: "center", maxWidth: "1920px", mx: "auto"}}>
          <Grid item xs={1.5} sx={{position: "relative"}}>
            <Box sx={{position: "fixed", height: "100%", width: "fit-content"}}>
              <AboutNavigation/>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Introduction/>
            {/* content here */}
          </Grid>
          <Grid item xs={12} mb={.25} mt={"30vh"}><Footer/></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default About