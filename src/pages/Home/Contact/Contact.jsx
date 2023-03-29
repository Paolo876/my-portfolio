import React from 'react'
import { Grid, Divider } from '@mui/material'
import ContactDescription from './ContactDescription'
import ContactInformations from './ContactInformations';


const Contact = () => {
  return (
    <Grid container sx={{px: 5, py: 6, mb: 4, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
      <Grid item xs={12} md={4} mt={8}>
        <ContactDescription/>
      </Grid>
      <Grid item xs={.25}></Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs={.25}></Grid>

      <Grid item xs={12} md={4} mt={8}>
        <ContactInformations/>
      </Grid>
      {/* <Grid item xs={12} md={3} mt={8}>
      </Grid> */}

    </Grid>
  )
}

export default Contact