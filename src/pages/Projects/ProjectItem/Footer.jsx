import React from 'react'
import { Grid, Box, Typography, ButtonBase, IconButton } from '@mui/material'
import SocialLinks from '../../../components/SocialLinks';
import DownloadIcon from '@mui/icons-material/Download';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const contactButtonStyles = {
  width: "fit-content", 
  textAlign: "left",
  display: "flex", 
  alignItems: "center", 
  gap: {xs: .75, sm: .75, lg: 1.5}, 
  justifyContent: "left",
  borderLeft: 2, 
  borderColor: "rgba(100,100,100,.75)",
  py: .5,
  px: { xs: 1, lg:2 },
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


const Footer = () => {
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
        width: "100vw",
        left: 0,
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,1)", mixBlendMode: "overlay", opacity: .5, zIndex: -1}}></Box>
      <Grid container sx={{maxWidth: "1500px", mx: "auto", height: "100%"}}>

      </Grid>
    </Box>
    )
}

export default Footer