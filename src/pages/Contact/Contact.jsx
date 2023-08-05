import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Stack, Box, Grid, Typography } from '@mui/material'
import ContactContainer from './ContactContainer'

const Contact = () => {
  return (
    <Box
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:8, sm: 12, md: 14, lg: 16, xl: 20}, 
        // pb: {xs:12, sm: 13, md: 12, lg: 15}, 
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >      
      <DocumentHead
        title="Paolo Bugarin | Contact"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container 
        sx={{
          justifyContent: "center", 
          alignItems: "flex-start", 
          maxWidth: "1500px", 
          mx: "auto",
        }}
      >   
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
      {/* <ContactContainer/>
      <Box sx={{flex: 1, ml: "auto", opacity: .5}}>
        <Footer/>

      </Box> */}
    </Box>
  )
}

export default Contact