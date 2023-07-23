import React from 'react'
import { Grid, Box, ButtonBase, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import SkillIconImageItem from "../../../components/SkillIconImageItem"
import useRootRedux from '../../../hooks/useRootRedux';


const ProjectUrlAndTechStack = ({ technologies }) => {
  const { skillsList } = useRootRedux();

  const projectTechnologies = skillsList.filter(item => technologies.includes(item.name))


  return (
    <Grid container>
      <Grid item xl={3} sx={{display: "flex", gap: 3, flexDirection: "column", mt: 10, }}>
        <Box>
          <ButtonBase 
            color="inherit"
            sx={{
              boxShadow: 5,
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
    <Grid item xl={9}>
      <Typography 
        variant="h4" 
        align="right" 
        fontWeight={400}
        fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 30}} 
        letterSpacing={{xs: .5, xL:1}}
        lineHeight={{xs:1}} 
        textTransform="none"
        sx={{
          textShadow: "1px 1px 7px rgba(10,10,10,.75)",
        }}
      >
        Main Tech Stack
      </Typography>
    </Grid>
  </Grid>  
  )
}

export default ProjectUrlAndTechStack