import { useState } from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import AboutContent from './AboutContent';

const About = () => {
  const [ showContent, setShowContent ] = useState(false);


  return (
    <Box 
      sx={{
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        py: {xs:8, sm: 10, md: 11, lg: 12, xl: 15},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // height: "88vh",
      }}
    >
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,1)", mixBlendMode: "overlay", opacity: .15, zIndex: -1}}></Box>

      {!showContent && <Box 
        align="center" 
        sx={{
          position: "absolute", 
          top: 0, 
          left: 0, 
          height: "100%", 
          width: "100%",
          // transform: "translateY(50%)",
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonBase 
          disableRipple
          onClick={() => setShowContent(true)}
          sx={{
            opacity: .65,
            transition: "all 500ms ease-in-out",
            letterSpacing: 3,
            textShadow: "1px 1px 7px rgba(10,10,10,.5)",
            borderBottom: 2,
            pb: .5,
            borderColor: "primary.dark",
            "&:hover": {
              transform: "scale(1.015)",
              opacity: 1,
              letterSpacing: 4,
              borderColor: "primary.main",
            }
          }}
        >
          <Typography variant="h2" textTransform="none" fontWeight={200} fontSize={{xs: 40, sm: 50, md: 55, lg:60}}>Who Am I?</Typography>
        </ButtonBase>
      </Box>}
      <Box sx={{opacity: showContent ? 1 : 0}}>
        <AboutContent isVisible={showContent}/>
      </Box>
    </Box>  
  )
}

export default About