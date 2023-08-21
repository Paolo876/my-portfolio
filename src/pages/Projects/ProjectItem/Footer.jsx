import React from 'react'
import { useNavigate } from 'react-router-dom';
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
  gap: {xs: .5, sm: .5, lg: 1, xl: 1.5}, 
  justifyContent: "left",
  borderLeft: 2, 
  borderColor: "rgba(100,100,100,.75)",
  py: {xs: .15, sm: .25, md:.5},
  px: { xs: 1, xl:2 },
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
  const navigate = useNavigate();


  return (
    <Box 
      sx={{
        position: "relative", 
        pt: {xs:3, sm: 3, md: 5, lg: 5, xl: 6}, 
        pb: {xs:1, sm: 1, md: 2, lg: 2, xl: 3}, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
      }}
    >
      <Grid container sx={{justifyContent: "space-between"}}>
        <Grid item xs={12} sm={7} md={7} lg={5} pr={{sm: 2, md: 4, xl: 4}}>
          <Box>
            <Typography 
              variant="h2" 
              fontWeight={400}
              fontSize={{xs: 16, sm: 17, md: 20, lg: 24, xl: 25}} 
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
                fontSize: {xs: 9.5, sm: 10, md: 11, lg:12, xl: 12},
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
                fontSize: {xs: 9.5, sm: 10, md: 10, lg:11.5, xl: 11.5},
                fontWeight: 300,
                opacity: .5,
                letterSpacing: .3,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
              }}
            >
              For inquiries, please feel free to reach me through my contact informations provided or by submitting the form in the contact page.
            </Typography>
          </Box>
          
          <Box mt={{xs: 2.5, sm: 1.5, md: 2, xl:3}} sx={{display: {xs: "flex",sm:"none", md: "flex"}, justifyContent: "space-between"}}>
            <ButtonBase
              onClick={() => navigate("/contact")}
              sx={{
                borderLeft: 2, 
                fontSize: {xs:13, sm: 14, md: 15, lg: 17, xl: 18},                
                lineHeight: 1.4, 
                color: "primary.main", 
                borderColor: "rgba(100,100,100,.75)",
                px: {xs: 1, md:1.5},
                py: .1,
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
            <ButtonBase 
              color="inherit"
              sx={{
                display: {xs: "flex", sm: "none"},
                boxShadow: 6,
                fontSize: { xs: ".8rem", sm: ".9rem", md: ".9rem", lg: "1rem" },
                lineHeight: 1.4, 
                backgroundColor: "rgba(130,130,130,.75)",
                px: {xs: 1.5, sm: 2},
                py: {xs: .8, lg:1},
                fontWeight: 600,
                letterSpacing: .5,
                opacity: {xs: .9, lg:.85},
                transition: "all 250ms ease-in-out",
                fontFamily: "Manrope",
                "&:hover":{
                  opacity:1,
                  textShadow: "1px 1px 3px rgba(10,10,10,.25)",
                  transform: "scale(1.02)",
                  letterSpacing: .6,
                  boxShadow: 3,

                },
                "svg": {
                  transition: "all 500ms ease-in-out",
                  color: {xs: "primary.main", lg: "white"},
                },
                "&:hover svg": {
                  color: "primary.main",
                }
              }}
            >
              Download My CV <DownloadIcon sx={{ml: 1}} fontSize='small'/>
            </ButtonBase>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={5} md={5} lg={4} sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "left", height: "100%"}} mt={{xs: 5, sm: 0}}>
          <Box align="left">
            <Typography 
              variant="h2" 
              fontWeight={400}
              fontSize={{xs: 16, sm: 18, md: 20, lg: 24, xl: 25}} 
              letterSpacing={.5}
              lineHeight={1.1} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >Paolo Bugarin</Typography>
            <Typography
              sx={{
                fontSize: { xs: 10.5, sm: 11, md: 12, lg:13.5, xl: 13.5 },
                fontWeight: 200,
                opacity: .7,
                letterSpacing: 1,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                mt: {xs: .7, sm:1.5},
              }}
            >Los Angeles, CA</Typography>
          </Box>
          <Box mt={{xs: 1.5, sm: 1.5, md: 4, xl:4}}>
            <Box>
              <IconButton size="small" href="tel:3234817852" sx={contactButtonStyles} disableRipple>
                <LocalPhoneIcon color="primary" sx={{fontSize: { xs:20, sm: 20, md: 22, lg: 23 }}} />
                <Typography sx={{fontSize: {xs:12, sm: 12, md: 13, lg: 13.5, xl: 15}, letterSpacing: 1}} fontWeight={300}>(323) 481 - 7852</Typography>
              </IconButton> 
            </Box>
            <Box mt={{xs:1, sm: 1, md: 2}}>
              <IconButton size="small" target="_blank" href="mailto: paolopaolobugarin@gmail.com" sx={contactButtonStyles} disableRipple>
                <MailOutlineIcon color="primary" sx={{fontSize: { xs:20, sm: 20, md: 22, lg: 23 }}}/>
                <Typography sx={{fontSize: {xs:12, sm: 12, md: 13, lg: 13.5, xl: 15}, letterSpacing: 1}} fontWeight={300}>paolopaolobugarin@gmail.com</Typography>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={12} lg={3} sx={{display: "flex", flexDirection: {xs: "row", lg:"column"}, justifyContent: "space-between", height: "100%"}} mt={{xs:0, sm: 3, md: 1.5, lg:0}}>
          <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: {xs: "space-between", lg:"right"}}}>
            <Box mt={{md: 2,xl:4}} sx={{display: {xs: "none", sm:"initial", md: "none"}}}>
              <ButtonBase
                onClick={() => navigate("/contact")}
                sx={{
                  borderLeft: 2, 
                  fontSize: {xs:13, sm: 14, md: 17, lg: 18},                
                  lineHeight: 1.4, 
                  color: "primary.main", 
                  borderColor: "rgba(100,100,100,.75)",
                  px: 1,
                  py: .15,
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
                display: {xs: "none", sm: "flex"},
                boxShadow: 6,
                fontSize: { xs: ".9rem", sm: ".9rem", md: ".9rem", lg: "1rem" },
                lineHeight: 1.4, 
                backgroundColor: "rgba(130,130,130,.75)",
                px: {xs: 1, sm: 2},
                py: {xs: .7, lg:1},
                fontWeight: 600,
                letterSpacing: .5,
                opacity: {xs: .9, lg:.85},
                transition: "all 250ms ease-in-out",
                fontFamily: "Manrope",
                "&:hover":{
                  opacity:1,
                  textShadow: "1px 1px 3px rgba(10,10,10,.25)",
                  transform: "scale(1.02)",
                  letterSpacing: .6,
                  boxShadow: 3,

                },
                "svg": {
                  transition: "all 500ms ease-in-out",
                  color: {xs: "primary.main", lg: "white"},
                },
                "&:hover svg": {
                  color: "primary.main",
                }
              }}
            >
              Download My CV <DownloadIcon sx={{ml: 1.5}}/>
            </ButtonBase>
          </Box>
          <Box mt={4} sx={{width: "fit-content", display: {xs: "none", md: "initial"}}} ml="auto">
            <SocialLinks 
              flexDirection='row' 
              color="inherit" 
              gap={.5}
              placement="bottom"
              additionalStyles={{
                opacity: {md: .85, lg:.65},
                transition: "all 150ms ease-in-out",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.15)",
                  color: "primary.light",
                }
              }}
            />
          </Box>
          <Box sx={{width: "100%", display: {xs: "none", md: "initial"}}} mt={{ md: 3, lg: 3, xl:3 }}>
            <Typography sx={{fontSize: {xs: 9, sm:9, md: 9, lg:9, xl: 12}, opacity: .5, mixBlendMode: "difference", textAlign: "right"}}>
              © 2023 Paolo Bugarin, All rights reserved.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} mt={{xs: 2.75,sm:5}} mb={1} sx={{display: {xs:"flex", md: "none"}, flexDirection: {xs: "row", sm:"row"}, justifyContent: "space-between", height: "100%", alignItems: "center"}}>
          <Box mt={{md:4}} sx={{width: "fit-content", display: {xs: "initial", md: "none"}}} ml={{sm:"auto"}}>
            <SocialLinks 
              flexDirection='row' 
              color="inherit" 
              gap={.5}
              placement="bottom"
              additionalStyles={{
                opacity: .8,
                transition: "all 150ms ease-in-out",
                p: .1, 
                mr: 1.5,
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.15)",
                  color: "primary.light",
                }
              }}
            />
          </Box>
          <Box sx={{width: "100%", display: {xs: "flex", md: "none"}, mt: {xs: .5, sm: 0}, alignItems: "center", justifyContent: "right"}}>
            <Typography sx={{fontSize: {xs: 9, sm:10, md: 11.5, lg:13, xl: 14}, opacity: .5, mixBlendMode: "difference", textAlign: {xs: "right", sm:"right"}}}>
              © 2023 Paolo Bugarin, All rights reserved.
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
    )
}

export default Footer