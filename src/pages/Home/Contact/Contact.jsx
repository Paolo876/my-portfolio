import React from 'react'
import { Grid, Divider, Box, Typography, Button } from '@mui/material'
import ContactDescription from './ContactDescription';
import SocialLinks from '../../../components/SocialLinks';
import ContactInformations from './ContactInformations';
import DownloadIcon from '@mui/icons-material/Download';
import Footer from '../../../components/Footer';

const Contact = () => {
  return (
  <Box sx={{position: "relative"}}>
    <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,.1)", mixBlendMode: "overlay", opacity: 1, zIndex: -1}}></Box>

    <Grid container sx={{px: {xs:0, sm: 0, md: 1.5, lg: 3}, py: {xs:6, sm: 6, md: 8, lg: 10, xl: 8}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={12}>
          <Grid container  sx={{justifyContent: "space-between", alignItems: "flex-start" }}>
            <Grid item xs={12} md={6.5}>
              <Box>
                <Typography variant="h4" fontSize={{xs:25, sm: 28, md: 30}} letterSpacing={{xs:3, sm:4, md:6, lg:8}} color="primary.main">Let's Talk</Typography>
                <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mr: "auto", mt: {xs: 1, md:1}, mr: .5, mixBlendMode: "difference", opacity: .75}}></Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "right"}}>
                <Button endIcon={<DownloadIcon/>} variant="contained" color="secondary" sx={{fontWeight: 500, letterSpacing: 1.5, fontSize: {xs: 11, sm: 12, md: 14, lg: 15, xl: 15}}}>Download My CV</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

      <Grid item xs={12}>
        <Grid container  sx={{my: 4, justifyContent: "space-between", alignItems: "flex-start" }} spacing={1}>
          <Grid item xs={12} sm={10} md={6} lg={4} order={{xs: 2, md: 1}}>
            <ContactDescription/>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={6} order={{xs: 1, md: 2}}>
            <ContactInformations/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={7} mt={5}>
        <Divider flexItem><SocialLinks gap={1.5} buttonSize="small" flexDirection="row"/></Divider>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Contact