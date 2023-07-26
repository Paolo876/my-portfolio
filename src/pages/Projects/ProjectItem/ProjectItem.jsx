import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Box, Typography, ListItem, ListItemButton, List } from '@mui/material';
import ProjectSelection from '../ProjectSelection';
import DocumentHead from '../../../components/DocumentHead'
import ProjectItemContent from './ProjectItemContent';


const ProjectItem = ({ projects }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find(item => item.name === id)
  
  useEffect(() => {
    if(!project) navigate('/projects')

  }, [id])
  return (
    <>
    <DocumentHead
      title={`Paolo Bugarin | ${project && project.title}`}
      description="I am a full stack web developer based in Los Angeles, California"
      keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
    />
    <Grid 
      container 
      sx={{
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto", 
        maxHeight: "100vh", 
        position: "fixed",
        top: 0,
        left: "50%",
        transform:"translateX(-50%)",
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:10, sm: 11, md: 11, lg: 13, xl: 14}
      }}
    >
      <Grid item xs={3}>
        <List>
          {projects.map(item => <ListItem key={item.name} dense disablePadding disableGutters>
            <ListItemButton 
              className={id === item.name ? "active" : ""}
              disableRipple
              disableGutters
              onClick={() => navigate(`/projects/${item.name}`)}
              sx={{
                width: "100%", 
                alignItems: "flex-start", 
                display: "flex", 
                justifyContent: "left",
                textTransform: "none",
                fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 22},
                fontWeight: 300,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                transition: "all 150ms ease",
                opacity: .4, 
                mixBlendMode: "difference",
                my: 2, 
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  height: 3,
                  width: 0,
                  backgroundColor: "primary.main",
                  bottom: "50%",
                  left: -15,
                  transform: "translateX(-50%)",
                  transition: "all 200ms ease"
                },
                "&:hover": {
                  opacity: .9,
                  fontWeight: 500,
                  transform: "scale(1.015)",
                  background: "none",
                },
                "&.active": {
                  opacity: 1,
                  fontWeight: 600,
                  fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 23},
                  transform: "scale(1.015)",
                  mixBlendMode: "initial",
                  "&::before": {
                    width: 13,
                    backgroundColor: "primary.main",
                  }
                }
                }}>
              {item.title}
            </ListItemButton>
          </ListItem>)}
        </List>
      </Grid>

      <Grid item xs={9}></Grid>     
    </Grid>

    {/* content */}
    <Grid 
      container 
      sx={{
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto", 
        maxHeight: "100vh", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:10, sm: 11, md: 11, lg: 13, xl: 14}
      }}
    >
      <Grid item xs={3}></Grid>
      <Grid item xs={9} sx={{pl: {lg: 5, xl: 10}}}>
        {project && <ProjectItemContent project={project}/>}
      </Grid>     
    </Grid>


      {/* background  */}
      <Box sx={{position: "fixed", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
          <Grid item xl={3}></Grid>
          <Grid item xl={6} sx={{background: "rgba(100,100,100, .15)", height: "100vh", width: "100%", transform: "skewX(-7deg) translateX(-100%)", boxShadow: 2}}></Grid>
          <Grid item xl={3} align="right" sx={{background: "", height: "75vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", zIndex: -2}}>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProjectItem