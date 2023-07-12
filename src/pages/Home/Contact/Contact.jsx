import React from 'react'
import { Grid, Box, Typography, ButtonBase, IconButton } from '@mui/material'
// import ContactDescription from './ContactDescription';
import SocialLinks from '../../../components/SocialLinks';
// import ContactInformations from './ContactInformations';
import DownloadIcon from '@mui/icons-material/Download';
import Footer from '../../../components/Footer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Contact = () => {
  return (
  <Box sx={{position: "relative"}}>
    <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,1)", mixBlendMode: "overlay", opacity: .5, zIndex: -1}}></Box>
    <Grid container sx={{px: {xs:3, sm: 3, md: 4, lg: 3}, pt: {xs:3, sm: 4, md: 5, lg: 6, xl: 6}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={12} lg={4.5}>
        <Box>
          <Typography 
            variant="h2" 
            fontWeight={400}
            fontSize={{lg: 42, xl: 45}} 
            letterSpacing={.5}
            lineHeight={{lg:1.6, xl:1.1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >
            Let's Talk
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography 
            sx={{
              fontSize: {xs: 13, sm: 14, md: 15, lg:16, xl: 16.5},
              fontWeight: 400,
              opacity: .7,
              letterSpacing: .3,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            I am excited to take a leap forward and further hone my knowledge and skills with the right company.
          </Typography>
        </Box>
        <Box mt={1.5}>
          <Typography 
            sx={{
              fontSize: {xs: 13, sm: 14, md: 15, lg:15, xl: 15},
              fontWeight: 300,
              opacity: .5,
              letterSpacing: .3,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            For any questions or inquiries, please feel free to reach me through my contact informations provided or by submitting the form in the contact page.
          </Typography>
        </Box>
        <Box mt={5}>
          <ButtonBase
            sx={{
              borderLeft: 2, 
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.2rem", lg: "1.3rem", xl:"1.3rem" },
              lineHeight: 1.4, 
              color: "primary.main", 
              borderColor: "rgba(100,100,100,.75)",
              px: 1.5,
              py: .25,
              fontWeight: 600,
              letterSpacing: .4,
              opacity: .85,
              transition: "all 250ms ease-in-out",
              fontFamily: "Manrope",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
              }
            }}
          >
            Contact Page
          </ButtonBase>
        </Box>
      </Grid>
      
      <Grid item xs={12} lg={4.5} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%"}}>
        <Box align="center">
          <Typography 
            variant="h2" 
            fontWeight={400}
            fontSize={{lg: 42, xl: 42}} 
            letterSpacing={1}
            lineHeight={{lg:1.6, xl:1.1}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >Paolo Bugarin</Typography>
          <Typography
            sx={{
              fontSize: { xs: 15, sm: 16, md: 18, lg:20, xl: 22 },
              fontWeight: 200,
              opacity: .7,
              letterSpacing: 1,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >Los Angeles, CA</Typography>
        </Box>
        <Box mt={2}>
          <Box>
            <IconButton size="small" href="tel:3234817852" sx={{width: "100%", textAlign: "left"}}>
              <LocalPhoneIcon color="inherit" sx={{fontSize: { xs:26, sm: 28, md: 30, lg: 40 }}}/>
              <Typography sx={{fontSize: {xs:14, sm: 16, md: 18, lg: 20}, letterSpacing: 1, mt: {xs: 0, sm:.5}}} fontWeight={400}>(323) 481 - 7852</Typography>
            </IconButton> 
          </Box>
          <Box>
            <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={{mr: {xs: .75, sm: 1.5, lg: 2}, p: 0, ml:{lg: .75}}} disableFocusRipple disableRipple disableTouchRipple>
              <MailOutlineIcon color="inherit" sx={{fontSize: { xs:26, sm: 28, md: 30, lg: 40 }}}/>
              <Typography sx={{fontSize: {xs:14, sm: 14, md: 16, lg: 20}, mt: {xs: 0, sm:.5}}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%"}}>
        <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "right"}}>
          <ButtonBase 
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" },
              lineHeight: 1.4, 
              borderColor: "rgba(100,100,100,.75)",
              px: 2,
              py: 1,
              fontWeight: 600,
              letterSpacing: .5,
              opacity: .75,
              transition: "all 250ms ease-in-out",
              fontFamily: "Manrope",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.dark",
              }
            }}
          >
            Download My CV <DownloadIcon sx={{ml: 1.5}}/>
          </ButtonBase>
        </Box>
        <Box mt={3} sx={{width: "fit-content"}} ml="auto">
          <SocialLinks 
            flexDirection='row' 
            color="inherit" 
            gap={.5}
            placement="bottom"
            additionalStyles={{
              opacity: .65,
              transition: "all 150ms ease-in-out",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.15)",
                color: "primary.light",
              }
            }}
          />
        </Box>
      </Grid>
    </Grid>

    <Grid item xs={12} mt={3}><Footer/></Grid>
    
  </Box>
  )
}

export default Contact