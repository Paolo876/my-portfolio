import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import ContactDescription from './ContactDescription'
import ContactForm from './ContactForm'


const ContactContainer = () => {
  return (
    <Box sx={{position: "relative", minHeight: "65vh", my: "auto", }}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "white", mixBlendMode: "overlay", opacity: .95, zIndex: -1}}></Box>
      <Container maxWidth="xl">
        <Grid container align="center" sx={{height: "100%"}}>
          <Grid item xs={6}>
            <ContactDescription/>
          </Grid>
          <Grid item xs={6}>
            <ContactForm/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactContainer