import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Box, ListItem, ListItemButton, List } from '@mui/material';
import DocumentHead from '../../../components/DocumentHead'
import ProjectItemContent from './ProjectItemContent';


const ProjectItem = ({ projects }) => {
  const { id } = useParams();

  const [ project, setProject ] = useState(projects.find(item => item.name === id))
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!project){
       navigate('/projects')
    } else {
      setProject(projects.find(item => item.name === id))
    }

  }, [id])
  return (
    <>
    <DocumentHead
      title={`Paolo Bugarin | ${project && project.title}`}
      description="I am a full stack web developer based in Los Angeles, California"
      keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
    />
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative", 
        pt: {xs:8, sm: 11, md: 13, lg: 13, xl: 15},  
      }}
    > 
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
        px: { xs:1.75, sm: 3, md: 4, lg: 5, xl: 0 }, 

        pt: {xs:10, sm: 11, md: 11, lg: 13, xl: 14}
      }}
    >
      <Grid item xs={3} xl={2.5}>
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
                fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 17},
                fontWeight: 300,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                transition: "all 150ms ease",
                opacity: .4, 
                mixBlendMode: "difference",
                my: 1.1, 
                letterSpacing: .25,
                position: "relative",
                borderLeft: 2,
                borderColor: "rgba(100,100,100,.75)",
                px: {xs: 1, md:1.5},
                py: .1,
                "&:hover": {
                  opacity: .9,
                  fontWeight: 500,
                  transform: "scale(1.02) translateX(2px)",
                  background: "none",
                  borderColor: "primary.dark",
                  letterSpacing: .5,
                },
                "&.active": {
                  opacity: 1,
                  fontWeight: 600,
                  transform: "scale(1.04) translateX(5px)",
                  textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                  borderLeft: 3, 
                  borderColor: "primary.main",
                  mixBlendMode: "initial",
                  letterSpacing: .5,
                }
              }}
            >
              {item.title}
            </ListItemButton>
          </ListItem>)}
        </List>
      </Grid>

      <Grid item xs={9} xl={9.5}></Grid>     
    </Grid>

    {/* content */}
    <Grid 
      container 
      sx={{
        justifyContent: "space-between", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto", 
        maxHeight: "100vh", 
      }}
    >
      <Grid item xs={3} xl={2.5}></Grid>
      <Grid item xs={9} xl={9.15} >
        {project && <ProjectItemContent project={project}/>}
      </Grid>   
    </Grid>
    

      {/* background  */}
      {/* <Box sx={{position: "fixed", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
          <Grid item xl={3}></Grid>
          <Grid item xl={6} sx={{background: "rgba(100,100,100, .15)", height: "100vh", width: "100%", transform: "skewX(-7deg) translateX(-100%)", boxShadow: 2}}></Grid>
          <Grid item xl={3} align="right" sx={{background: "", height: "75vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", zIndex: -2}}>
          </Grid>
        </Grid>
      </Box> */}
      </Box>
    </>
  )
}

export default ProjectItem