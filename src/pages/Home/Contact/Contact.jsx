import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, ButtonBase, IconButton } from '@mui/material'
import SocialLinks from '../../../components/SocialLinks';
import DownloadIcon from '@mui/icons-material/Download';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import useRootRedux from "../../../hooks/useRootRedux";


const contactButtonStyles = {
  width: "fit-content", 
  textAlign: "left",
  display: "flex", 
  alignItems: "center", 
  gap: {xs: .75, sm: .75, lg: 1.5}, 
  justifyContent: "left",
  borderLeft: 2, 
  borderColor: "rgba(100,100,100,.75)",
  py: {xs: .25, sm:.5},
  px: {xs: 1, lg:2},
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
  const navigate = useNavigate();
  const { resumeUrl } = useRootRedux();

  
  return (
    <Box 
    sx={{
      position: "relative", 
      px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
      pt: {xs:15, sm: 16, md: 17, lg: 18, xl: 20}, 
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
            fontWeight={500}
            fontSize={{xs: 23, sm: 24, md: 25, lg: 26}} 
            letterSpacing={.75}
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
              fontSize: {xs: 9, sm: 9.5, md: 10.5, lg:12, xl: 13},
              fontWeight: 300,
              opacity: .7,
              letterSpacing: .75,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            I am excited to take a leap forward and further hone my knowledge and skills with the right company.
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography 
            sx={{
              fontSize: {xs: 9, sm: 9.5, md: 10, lg:11.5, xl: 12.5},
              fontWeight: 100,
              opacity: .6,
              letterSpacing: .75,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            For inquiries, please feel free to reach me through my contact informations provided or by submitting the form in the contact page.
          </Typography>
        </Box>
        
        <Box mt={{xs: 1.5, md: 3, lg:3}} sx={{display: {sm:"none", md: "flex"}}}>
          <ButtonBase
            onClick={() => navigate("/contact")}
            sx={{
              borderLeft: 2, 
              fontSize: { xs: ".75rem", md: ".85rem", lg: ".87rem"},
              lineHeight: 1.4, 
              color: "primary.main", 
              borderColor: "rgba(100,100,100,.75)",
              px: {xs: 1, md:1.25},
              py: .1,
              fontWeight: 600,
              letterSpacing: {xs: 1.25, sm:1.75, lg: 1.75},
              opacity: {xs: .95, lg:.85},
              transition: "all 250ms ease-in-out",
              fontFamily: "Manrope",
              textTransform: "uppercase",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.01)",
                borderColor: "rgba(150,150,150,1)",
              }
            }}
          >
            Contact Page
          </ButtonBase>
        </Box>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={4} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "left", height: "100%"}} mt={{xs: 5, sm: 0}}>
        <Box align="left">
          <Typography 
            variant="h2" 
            fontWeight={400}
            fontSize={{xs: 20, sm: 20.5, md: 21, lg: 22, xl: 22.5}} 
            letterSpacing={.5}
            lineHeight={1.1} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >Paolo Bugarin</Typography>
          <Typography
            sx={{
              fontSize: {xs: 9, sm: 9.5, md: 10.5, lg:12, xl: 13},
              fontWeight: 100,
              opacity: .65,
              letterSpacing: 1.25,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              mt: {xs: .75, sm:1.5},
            }}
          >Los Angeles, CA</Typography>
        </Box>
        <Box mt={{xs: 1.5, sm: 3, md: 3.5, xl:3.5}}>
          <Box>
            <IconButton size="small" href="tel:3234817852" sx={contactButtonStyles} disableRipple>
              <LocalPhoneIcon color="primary" sx={{fontSize: { xs:18, sm: 19, md: 20.5, lg: 21}}} />
              <Typography sx={{fontSize: {xs:11, sm: 12, md: 13, lg: 13.5, xl: 14}, letterSpacing: .5}} fontWeight={400}>(323) 481 - 7852</Typography>
            </IconButton> 
          </Box>
          <Box mt={{xs:1.25, sm: 2}}>
            <IconButton size="small" target="_blank" href="mailto: paolo_bugarin@outlook.com" sx={contactButtonStyles} disableRipple>
              <MailOutlineIcon color="primary" sx={{fontSize: { xs:18, sm: 19, md: 20.5, lg: 21}}}/>
              <Typography sx={{fontSize: {xs:11, sm: 12, md: 13, lg: 13.5, xl: 14}, letterSpacing: .5}} fontWeight={400}>paolo_bugarin@outlook.com</Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      
      <Grid item xs={12} sm={12} md={3} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}} mt={{xs: 4, md: 0}}>
        <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: {xs: "space-between", md:"right"}}}>
          <Box sx={{display: {xs: "none", sm:"initial", md: "none"}}}>
            <ButtonBase
              onClick={() => navigate("/contact")}
              sx={{
                borderLeft: 2, 
                fontSize: ".85rem",
                lineHeight: 1.2, 
                color: "primary.main", 
                borderColor: "rgba(175,175,175,.75)",
                px: 1.5,
                py: .25,
                fontWeight: 600,
                letterSpacing: 1.5,
                opacity: .95,
                transition: "all 250ms ease-in-out",
                textTransform: "uppercase",
                fontFamily: "Manrope",
              }}
            >
              Contact Page
            </ButtonBase>
          </Box>
          <ButtonBase 
            href={resumeUrl}
            target="_blank"
            color="inherit"
            sx={{
              boxShadow: 5,
              border: 2, 
              fontSize: { xs: ".8rem", sm: ".85rem", md: ".9rem", lg: ".95rem" },
              lineHeight: 1, 
              borderColor: "rgba(100,100,100,.75)",
              px: {xs: 1.8, sm: 2, md: 2.2, lg: 2.75},
              py: {xs: 1.15, sm: 1.15, md:1.15, lg: 1.25},
              fontWeight: 600,
              letterSpacing: {xs:1.75, lg: 1.75},
              opacity: {xs: .9, lg:.75},
              transition: "all 250ms ease-in-out",
              textTransform: "uppercase",
              transform: {sm:"skewX(-3deg)"},
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: {sm:"scale(1.02) skewX(-3deg)"},
                borderColor: "primary.dark",
              }
            }}
          >
            Download My CV <DownloadIcon sx={{ml: 1.5}} style={{fontSize: "inherit"}}/>
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
          <Typography sx={{fontSize: {xs: 9, sm:10, md: 11, lg:12, xl: 12.5}, opacity: .35, mixBlendMode: "difference", textAlign: "right"}}>
            © 2023 Paolo Bugarin, All rights reserved.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} mt={2} sx={{display: {xs:"flex", md: "none"}, flexDirection: {xs: "column", sm:"row"}, justifyContent: "space-between", height: "100%", alignItems: "center"}}>
        <Box mt={{md:4}} sx={{width: "fit-content", display: {xs: "initial", md: "none"}}} ml={{sm:"auto"}}>
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
          <Typography sx={{fontSize: {xs: 9, sm:10, md: 11, lg:12, xl: 12.5}, opacity: .35, mixBlendMode: "difference", textAlign: {xs: "center", sm:"right"}}}>
            © 2023 Paolo Bugarin, All rights reserved.
          </Typography>
        </Box>
      </Grid>
    </Grid>    
  </Box>
  )
}

export default Contact