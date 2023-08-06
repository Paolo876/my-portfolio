import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Stack, Box, Grid, Typography } from '@mui/material'
import ContactForm from './ContactForm'
import ContactDescription from './ContactDescription'

const Contact = () => {
  return (
    <Box
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:8, sm: 12, md: 14, lg: 15, xl: 15}, 
        // pb: {xs:12, sm: 13, md: 12, lg: 15}, 
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden"
      }}
    >      
      <DocumentHead
        title="Paolo Bugarin | Contact"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container 
        sx={{
          justifyContent: "space-between", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto",
        }}
      >   
        <Grid item xl={5.5} sx={{display: "flex", flexDirection: "column", height: "100%"}}>
          <ContactDescription/>
        </Grid>
        <Grid item xl={5}>
          <ContactForm/>
        </Grid>
      </Grid>

      {/* background */}
      <Box sx={{position: "absolute", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", mx: "auto"}}>
          <Grid item xl={3}></Grid>
          <Grid item xl={9} sx={{background: "rgba(50,50,50,.35)", height: "100vh", width: "100%", transform: "skewX(-7deg) translateX(150px)"}}></Grid>
        </Grid>
      </Box>

    </Box>
  )
}

export default Contact