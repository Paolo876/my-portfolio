import React from 'react'
import { Grid, Divider, Box, Typography, Button } from '@mui/material'
import ContactDescription from './ContactDescription';
import SocialLinks from '../../../components/SocialLinks';
import ContactInformations from './ContactInformations';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  return (
    <Grid container sx={{px: 5, pt: 6, mb: 4, justifyContent: "center", alignItems: "flex-start", maxWidth: "1900px", mx: "auto"}} spacing={1}>
      <Grid item xs={12}>
        <Grid container  sx={{px: 5, mt:6, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
          <Grid item xs={12} md={5.5}>
            <Box>
              <Typography variant="h4">Let's Talk</Typography>
              <Box sx={{background: "white", height: "3px", width: "15px", mt: 3}} ></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "right", pt: 3}}>
              <Button endIcon={<DownloadIcon/>} variant="contained" color="secondary">Download My CV</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container  sx={{px: 5, mb: 4, mt: 5, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
          <Grid item xs={12} md={5}>
            <ContactDescription/>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <ContactInformations/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={7} mt={5}>
        <Divider flexItem><SocialLinks iconSize="medium" gap={1.5} buttonSize="small" flexDirection="row"/></Divider>
      </Grid>
    </Grid>
  )
}

export default Contact