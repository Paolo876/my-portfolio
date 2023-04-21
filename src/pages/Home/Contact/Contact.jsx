import React from 'react'
import { Grid, Divider, Box, Typography, Button } from '@mui/material'
import ContactDescription from './ContactDescription';
import SocialLinks from '../../../components/SocialLinks';
import ContactInformations from './ContactInformations';
import DownloadIcon from '@mui/icons-material/Download';
import Footer from '../../../components/Footer';

const Contact = () => {
  return (
    <Grid container sx={{px: {xs:3, md: 1.5, lg: 3}, py: {xs:3, sm: 4, md: 5, lg: 10}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={12}>
        <Grid container  sx={{justifyContent: "space-between", alignItems: "flex-start" }}>
          <Grid item xs={12} md={6.5}>
            <Box>
              <Typography variant="h4" fontSize={{xs:26, sm: 28, md: 30, lg: 32}} letterSpacing={{xs:4, sm:6, md:8, lg:12}}>Let's Talk</Typography>
              <Box sx={{background: "white", height: "3px", width: "15px", mt: 3}} ></Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "right", pt: 3}}>
              <Button endIcon={<DownloadIcon/>} variant="contained" color="secondary">Download My CV</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container  sx={{my: 4, justifyContent: "center", alignItems: "flex-start" }} spacing={1}>
          <Grid item xs={12} md={5} lg={6}>
            <ContactDescription/>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
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