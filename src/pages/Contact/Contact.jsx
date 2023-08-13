import React from 'react'
import DocumentHead from '../../components/DocumentHead'

import { Box, Grid, Typography } from '@mui/material'
import ContactForm from './ContactForm'
import ContactDescription from './ContactDescription'

const Contact = () => {
  return (
    <Box
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:8, sm: 12, md: 14, lg: 11, xl: 15}, 
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
        <Grid item lg={5.25} xl={5.5} sx={{display: "flex", flexDirection: "column", height: "100%"}}>
          <ContactDescription/>
        </Grid>
        <Grid item lg={6} xl={5}>
          <ContactForm/>
        </Grid>

      </Grid>
      {/* background */}
      <Box sx={{position: "absolute", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", mx: "auto"}}>
          <Grid item lg={3}></Grid>
          <Grid item lg={9} sx={{background: "rgba(50,50,50,.35)", height: "100vh", width: "100%", transform: "skewX(-7deg) translateX(150px)"}}></Grid>
        </Grid>
      </Box>

      <Box sx={{position: "absolute", bottom: 5, right: 5, zIndex: 1}}>
        <Typography
          variant="body2"
          sx={{
            fontSize: {xs: 11, sm:11, md: 11.5, lg:13, xl: 14}, 
            opacity: .5, 
            mixBlendMode: "difference", 
          }}
        >© 2023 Paolo Bugarin, All rights reserved.</Typography>
      </Box>
    </Box>
  )
}

export default Contact