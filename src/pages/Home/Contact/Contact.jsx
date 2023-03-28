import React from 'react'
import { Grid } from '@mui/material'
import ContactDescription from './ContactDescription'


const Contact = () => {
  return (
    <Grid container sx={{px: 5, py: 6, justifyContent: "center", alignItems: "flex-start" }}>
      <Grid item xs={12} md={3} mt={8}>
        <ContactDescription/>
      </Grid>
      <Grid item xs={12} md={3} mt={8}>
      </Grid>
      <Grid item xs={12} md={3} mt={8}>
      </Grid>

    </Grid>
  )
}

export default Contact