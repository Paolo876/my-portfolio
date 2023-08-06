import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Stack, Box, Grid, Typography } from '@mui/material'
import ContactContainer from './ContactContainer'
import ContactForm from './ContactForm'

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
        {/* <Grid item xs={12}>
          <Typography 
            variant="h2" 
            align="left" 
            fontWeight={400}
            fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 88}} 
            letterSpacing={{xs: .5, xL:1}}
            lineHeight={{xs:1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(25,25,25,.75)",
            }}
          >
            Let's Talk
          </Typography>
        </Grid> */}
        <Grid item xl={5.5}>
          <Box>
            <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 88}} 
              letterSpacing={{xs: .5, xL:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
              }}
            >
              Let's Talk
            </Typography>
          </Box>
          <Box sx={{mt: {xs: 3, sm: 4, md: 10, lg: 10, xl: 10}, pl: {xl: .5}}}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 16},
                fontWeight: 300,
                opacity: .55,
                letterSpacing: .4,
                lineHeight: 1.4,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              Let me show you my capabilities and how I can be a great part of your company. 
              I am excited to take a leap forward and further hone my knowledge and skills with the right company.
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography 
              sx={{
                fontSize: {xs: 11.5, sm: 12, md: 12.5, lg:13, xl: 14.5},
                fontWeight: 400,
                opacity: .7,
                letterSpacing: .3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              
            </Typography>
          </Box>
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
      {/* <ContactContainer/>
      <Box sx={{flex: 1, ml: "auto", opacity: .5}}>
        <Footer/>

      </Box> */}
    </Box>
  )
}

export default Contact