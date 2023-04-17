import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Box, Stack, Typography } from '@mui/material'
import ContactContainer from './ContactContainer'

const Contact = () => {
  return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
      <DocumentHead
        title="Paolo Bugarin | About"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Stack sx={{height: "100%"}}>
        <Box                
          sx={{
            opacity: .75, 
            mixBlendMode: "difference", 
            mt: 4
          }}
          >
          <Typography 
            variant="h2" 
            align="center"
            sx={{
              textTransform: "none",
              fontWeight: 800,
              lineHeight: .95,
            }}
            >Get In Touch</Typography>
            <Box sx={{background: "white", height: "4px", width: "25px", my: 3, mx: "auto", opacity: .75}}></Box>
          </Box>
        <Box flex={1} sx={{my: 2}}>
          <ContactContainer/>
        </Box>
        <Footer/>
      </Stack>
    </Box>
  )
}

export default Contact