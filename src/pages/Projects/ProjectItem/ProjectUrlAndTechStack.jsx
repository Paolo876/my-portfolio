import React from 'react'
import { Grid, Box, Typography, Tooltip, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import SkillIconImageItem from "../../../components/SkillIconImageItem"
import useRootRedux from '../../../hooks/useRootRedux';

const skillIconStyles = {
  width: "fit-content",
  py: {sm: .75, md: .75, lg: 1, xl:3},
  height: "100%",
  userSelect: "none",
  opacity: .45,  
  background: "none",
  transition: "all 250ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.025)",
    borderColor: "primary.main",
  }
}

const urlButtonStyles = {
  width: "fit-content", 
  textAlign: "left",
  display: "flex", 
  alignItems: "center", 
  gap: {xs: .75, sm: .75, lg: 1.5}, 
  justifyContent: "left",
  borderLeft: 2, 
  borderColor: "rgba(100,100,100,.75)",
  py: .5,
  px: {xs: 1, lg:2},
  transition: "all 250ms ease-in-out",
  letterSpacing: .5,
  opacity: .7,
  fontSize: {xs: 16, sm: 17, md: 18, lg: 20, xl: 21},
  fontWeight: 400,
  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.025)",
    borderColor: "primary.main",
  }
}


const ProjectUrlAndTechStack = ({ technologies, url, githubUrl }) => {
  const { skillsList } = useRootRedux();

  const projectTechnologies = skillsList.filter(item => technologies.includes(item.name))

  console.log(projectTechnologies[0])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography 
          variant="h4" 
          align="right" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 25}} 
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
      <Grid item xl={5.5} sx={{display: "flex", gap: 5, flexDirection: "column", mt: 4.5, }}>
        <Box>
          <IconButton size="small" href={url} target='_blank'sx={urlButtonStyles} disableRipple>
            <PublicIcon color="primary" sx={{fontSize: { xs:20, sm: 23, md: 22, lg: 25}}} />
            <Box component="span">Web Demo</Box>
          </IconButton> 
        </Box>
        <Box>
          <IconButton size="small" href={githubUrl} target='_blank' sx={urlButtonStyles} disableRipple>
            <GitHubIcon color="primary" sx={{fontSize: { xs:20, sm: 23, md: 22, lg: 25}}} />
            <Box component="span">Git Repo</Box>
          </IconButton> 
        </Box>
    </Grid>

    <Grid item xl={6.5} align="right">    
      <Grid container sx={{mt: {xl: 3}, justifyContent: "end"}}>
        {projectTechnologies.map(item => <Grid item xs={2.4} sm={2.1} md={2.4} key={item.name} align="right">
          <Tooltip 
            title={<Typography variant="body1" fontSize={12} fontWeight={300} letterSpacing={.4} px={.25}>{item.name}</Typography>} 
            arrow
            placement="bottom"
            enterDelay={500}
            enterNextDelay={250}
          >
            <Box sx={skillIconStyles} variant="outlined">
              <Box height={{xs: 25, sm: 40, md:45, lg:50, xl: 30}} width="auto">
                <SkillIconImageItem 
                  src={item.monoUrl} 
                  duration={500} 
                  objectFit='scale-down'
                  sx={{filter: "invert(1) brightness(1.1)"}}
                  />
              </Box>
            </Box>
          </Tooltip>
        </Grid>)}
      </Grid>
    </Grid>
  </Grid>  
  )
}

export default ProjectUrlAndTechStack