import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import ContactDescription from './ContactDescription'
import ContactForm from './ContactForm'


const ContactContainer = () => {
  return (
    <Box sx={{position: "relative", my: "auto"}}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(255,255,255,.75)", mixBlendMode: "overlay", opacity: .75, zIndex: -1}}></Box>
      <Container maxWidth="xl">
        <Grid container align="center" sx={{px: {xs:0, sm: 1, md: 1, lg: 2.25, xl: 3},}}>
          <Grid item xs={6} sm={12} md={5} lg={6}>
            <ContactDescription/>
          </Grid>
          <Grid item xs={6} sm={12} md={7} lg={6}>
            <ContactForm/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactContainer