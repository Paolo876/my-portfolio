import React from 'react'
import { Box, Typography, Grid, Button, ButtonBase } from '@mui/material'
import Image from 'mui-image'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';


const ProjectItemContent = ( { project }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 70}} 
          letterSpacing={{xs: .5, xL:1}}
          lineHeight={{xs:1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          {project.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{mt: {xl: 5}}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:15, xl: 17},
            fontWeight: 300,
            opacity: .55,
            letterSpacing: .25,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          }}        
        >
          {project.description}
        </Typography>
      </Grid>

      <Grid item xl={3} sx={{display: "flex", gap: 2, flexDirection: "column", mt: 10, }}>
        <Box>
          <ButtonBase 
            color="inherit"
            sx={{
              boxShadow: 10,
              border: 2, 
              fontSize: { xs: ".9rem", sm: "1rem", md: "1rem", lg: "1rem" },
              lineHeight: 1.4, 
              borderColor: {xs: "primary.dark", sm:"rgba(100,100,100,.75)"},
              px: {xs: 1, sm: 1.5, lg: 2},
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
            Web Demo <PublicIcon sx={{ml: 1.5}}/>
          </ButtonBase>  
        </Box>
        <Box>
          <ButtonBase 
            color="inherit"
            sx={{
              boxShadow: 10,
              border: 2, 
              fontSize: { xs: ".9rem", sm: "1rem", md: "1rem", lg: "1rem" },
              lineHeight: 1.4, 
              borderColor: {xs: "primary.dark", sm:"rgba(100,100,100,.75)"},
              px: {xs: 1, sm: 1.5, lg: 2},
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
            Git Repo <GitHubIcon sx={{ml: 1.5}}/>
          </ButtonBase>
        </Box>
      </Grid>
      <Grid item xl={9}></Grid>
    </Grid>
  )
}

export default ProjectItemContent