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
        pt: {xs:10, sm: 12, md: 13, lg: 10, xl: 10}, 
        height: {lg:"100vh"},
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflowX: "hidden"
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
        <Grid item xs={12} lg={5.25} xl={5.5} sx={{display: "flex", flexDirection: "column", height: {md: "auto", lg:"100%"}}} mb={{xs: 1.5, sm: 4, lg: 0}}>
          <ContactDescription/>
        </Grid>
        <Grid item xs={12} lg={6} xl={5}>
          <ContactForm/>
        </Grid>
        <Box mt={{xl: 5}}>
        <Typography
          variant="body2"
          align="right"
          sx={{
            fontSize: {xs: 10.5, sm:11, md: 11, lg:12, xl: 12}, 
            opacity: .5, 
            mixBlendMode: "difference", 
          }}
        >© 2023 Paolo Bugarin, All rights reserved.</Typography>
      </Box>
      </Grid>

      {/* background */}
      {/* <Box sx={{position: "fixed", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", mx: "auto"}}>
          <Grid item xs={2} md={3}></Grid>
          <Grid item xs={10} md={9} sx={{background: "rgba(50,50,50,.25)", height: "100vh", width: "100%", transform: "skewX(-7deg) translateX(150px)"}}></Grid>
        </Grid>
      </Box> */}



    </Box>
  )
}

export default Contact