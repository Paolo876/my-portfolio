import React from 'react'
import DocumentHead from '../../components/DocumentHead'
import Footer from '../../components/Footer'

import { Box, Stack, Typography } from '@mui/material'
import ContactContainer from './ContactContainer'

const Contact = () => {
  return (
    <Box sx={{pt: 5, height: "100vh", overflowX: "hidden"}}>
      <DocumentHead
        title="Paolo Bugarin | Contact"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Stack sx={{height: "100%"}}>
        {/* <Box                
          sx={{
            mixBlendMode: "difference", 
            mt: 3
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
            >Contact Me</Typography>
            <Box sx={{background: "white", height: "4px", width: "25px", my: 2.5, mx: "auto", opacity: .85}}></Box>
          </Box> */}
        <Box sx={{my: "auto"}}>
          <ContactContainer/>
        </Box>
        <Footer/>
      </Stack>
    </Box>
  )
}

export default Contact