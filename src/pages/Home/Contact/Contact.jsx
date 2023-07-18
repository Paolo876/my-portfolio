import React from 'react'
import { Grid, Box, Typography, ButtonBase, IconButton } from '@mui/material'
// import ContactDescription from './ContactDescription';
import SocialLinks from '../../../components/SocialLinks';
// import ContactInformations from './ContactInformations';
import DownloadIcon from '@mui/icons-material/Download';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const contactButtonStyles = {
  width: "fit-content", 
  textAlign: "left",
  display: "flex", 
  alignItems: "center", 
  gap: {sm: .75, lg: 1.5}, 
  justifyContent: "left",
  borderLeft: 2, 
  borderColor: "rgba(100,100,100,.75)",
  py: .5,
  px: {sm: 1, lg:2},
  transition: "all 250ms ease-in-out",
  letterSpacing: .4,
  opacity: .75,

  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.02)",
    borderColor: "primary.main",
  }
}

const Contact = () => {
  return (
    <Box 
    sx={{
      position: "relative", 
      px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
      pt: {xs:3, sm: 4, md: 5, lg: 5, xl: 6}, 
      pb: {xs:1.5, sm: 2, md: 2.5, lg: 3, xl: 4}, 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
    >    
    <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,1)", mixBlendMode: "overlay", opacity: .5, zIndex: -1}}></Box>
    <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "100%"}}>
      <Grid item xs={12} sm={6} md={5} lg={5} pr={{sm: 2, md: 4, xl: 6}}>
        <Box>
          <Typography 
            variant="h2" 
            fontWeight={400}
            fontSize={{sm: 23, md: 24, lg: 26, xl: 30}} 
            letterSpacing={.5}
            lineHeight={1.1} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >
            Let's Talk
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography 
            sx={{
              fontSize: {xs: 12, sm: 12, md: 12.5, lg:13, xl: 14.5},
              fontWeight: 400,
              opacity: .7,
              letterSpacing: .3,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            I am excited to take a leap forward and further hone my knowledge and skills with the right company.
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography 
            sx={{
              fontSize: {xs: 11, sm: 11.5, md: 12, lg:12.5, xl: 13},
              fontWeight: 300,
              opacity: .5,
              letterSpacing: .3,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            For inquiries, please feel free to reach me through my contact informations provided or by submitting the form in the contact page.
          </Typography>
        </Box>
        
        <Box mt={{md: 2, xl:3}} sx={{display: {xs:"none", md: "flex"}}}>
          <ButtonBase
            sx={{
              borderLeft: 2, 
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.1rem", lg: "1.2rem", xl:"1.3rem" },
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
      
      <Grid item xs={12} sm={6} md={4} lg={4} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "left", height: "100%"}}>
        <Box align="left">
          <Typography 
            variant="h2" 
            fontWeight={400}
            fontSize={{sm: 23, md: 24, lg: 26, xl: 30}} 
            letterSpacing={.5}
            lineHeight={1.1} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >Paolo Bugarin</Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, sm: 13, md: 14, lg:15, xl: 16 },
              fontWeight: 200,
              opacity: .7,
              letterSpacing: 1,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              mt: 1.5,
            }}
          >Los Angeles, CA</Typography>
        </Box>
        <Box mt={{sm: 3, md: 4, xl:4}}>
          <Box>
            <IconButton size="small" href="tel:3234817852" sx={contactButtonStyles} disableRipple>
              <LocalPhoneIcon color="primary" sx={{fontSize: { xs:20, sm: 23, md: 22, lg: 25}}} />
              <Typography sx={{fontSize: {xs:14, sm: 14, md: 15, lg: 18}, letterSpacing: 1}} fontWeight={300}>(323) 481 - 7852</Typography>
            </IconButton> 
          </Box>
          <Box mt={2}>
            <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={contactButtonStyles} disableRipple>
              <MailOutlineIcon color="primary" sx={{fontSize: { xs:20, sm: 23, md: 22, lg: 25}}}/>
              <Typography sx={{fontSize: {xs:14, sm: 14, md: 15, lg: 18}, letterSpacing: 1}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      
      <Grid item xs={12} sm={12} md={3} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}} mt={{xs:2, sm: 3, md: 0}}>
        <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: {xs: "space-between", md:"right"}}}>
          <Box mt={{md: 2,xl:4}} sx={{display: {xs:"initial", md: "none"}}}>
            <ButtonBase
              sx={{
                borderLeft: 2, 
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.1rem", lg: "1.2rem", xl:"1.3rem" },
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
          <ButtonBase 
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1rem" },
              lineHeight: 1.4, 
              borderColor: "rgba(100,100,100,.75)",
              px: {sm: 1.5, lg: 2},
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
        <Box mt={{md:4}} sx={{width: "fit-content", display: {xs: "none", md: "initial"}}} ml="auto">
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
        <Box sx={{width: "100%", display: {xs: "none", md: "initial"}}} mt={{md: 3, lg: 4.25, xl:5}}>
          <Typography sx={{fontSize: {xs: 11, sm:11, md: 11.5, lg:13, xl: 14}, opacity: .5, mixBlendMode: "difference", textAlign: "right"}}>
            © 2023 Paolo Bugarin, All rights reserved.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} mt={1.5} sx={{display: {xs:"flex", md: "none"}, flexDirection: "row", justifyContent: "space-between", height: "100%", alignItems: "center"}}>
        <Box mt={{md:4}} sx={{width: "fit-content", display: {xs: "initial", md: "none"}}} ml="auto">
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
        <Box sx={{width: "100%", display: {xs: "initial", md: "none"}}}>
          <Typography sx={{fontSize: {xs: 11, sm:11, md: 11.5, lg:13, xl: 14}, opacity: .5, mixBlendMode: "difference", textAlign: "right"}}>
            © 2023 Paolo Bugarin, All rights reserved.
          </Typography>
        </Box>
      </Grid>
    </Grid>    
  </Box>
  )
}

export default Contact