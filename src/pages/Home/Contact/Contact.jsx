import React from 'react'
import { Grid, Divider, Box, Typography, Button } from '@mui/material'
import ContactDescription from './ContactDescription'
import ContactInformations from './ContactInformations';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  return (
    <Grid container sx={{px: 5, py: 6, mb: 4, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
      <Grid item xs={12}>
        <Grid container  sx={{px: 5, mt:8, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
          <Grid item xs={12} md={4.75}>
            <Box>
              <Typography variant="h4">Let's Talk</Typography>
              <Box sx={{background: "white", height: "3px", width: "20px", mt: 3.5}} ></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button endIcon={<DownloadIcon/>} variant="contained" color="secondary">Download CV</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container  sx={{px: 5, mb: 4, mt: 5, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
          <Grid item xs={12} md={4.5}>
            <ContactDescription/>
          </Grid>
          {/* <Divider orientation="vertical" flexItem></Divider> */}
          <Grid item xs={12} md={4.25}>
            <ContactInformations/>
          </Grid>
          {/* <Grid item xs={12} md={1.5}>
            <Button endIcon={<DownloadIcon/>} variant="contained" color="secondary">Download CV</Button>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact