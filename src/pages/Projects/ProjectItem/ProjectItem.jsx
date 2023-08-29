import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Grid, Box, ListItem, ListItemButton, List, Fade } from '@mui/material';
import DocumentHead from '../../../components/DocumentHead'
import ProjectItemContent from './ProjectItemContent';
import MobileNavigation from './MobileNavigation';
import { useSwipeable } from 'react-swipeable';


const ProjectItem = ({ projects }) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [ project, setProject ] = useState(projects.find(item => item.name === id))
  const [ isShown, setIsShown ] = useState(true);
  const navigate = useNavigate();
  const currentProjectIdx = projects.findIndex(item => item.name === project.name)


  useEffect(() => {
    const proj = projects.find(item => item.name === id);
    window.scrollTo(0, 0);

    if(!proj){
       navigate('/projects')
    } else {
      setProject(projects.find(item => item.name === id))
      setIsShown(true)
    }
  }, [id])


  const handleProjectChange = link => {
    if(link !== pathname) {
      setIsShown(false)
      setTimeout(() => {
        navigate(link)
      }, 300)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    delta: 10, 
  });

  const handleSwipe = (direction) => {
      if(direction === "left" && currentProjectIdx < projects.length - 1) {
        handleProjectChange(`/projects/${projects[currentProjectIdx + 1].name}`)
      }
      else if (direction === "right" && currentProjectIdx > 0) {
        handleProjectChange(`/projects/${projects[currentProjectIdx -1].name}`)
      }
  }


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
        pt: {xs:7.5, sm: 10.5, md: 13, lg: 13, xl: 15},  
      }}
      {...handlers}
    > 
    <Grid 
      container 
      sx={{
        display: {xs: "none", md: "initial"},
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
      <Grid item xs={3} md={3} lg={2.5}>
        <List>
          {projects.map(item => <ListItem key={item.name} dense disablePadding disableGutters>
            <ListItemButton 
              className={id === item.name ? "active" : ""}
              disableRipple
              disableGutters
              onClick={() => handleProjectChange(`/projects/${item.name}`)}
              // onClick={() => setIsShown(prevState => !prevState)}
              sx={{
                width: "100%", 
                alignItems: "flex-start", 
                display: "flex", 
                justifyContent: "left",
                textTransform: "none",
                fontSize: {xs: 12.5, sm: 13.5, md: 13.5, lg:16, xl: 17},
                fontWeight: 300,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                transition: "all 150ms ease",
                opacity: .4, 
                mixBlendMode: "difference",
                my: {md: .75, lg:1.1}, 
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

      <Grid item xs={9} md={9.5}></Grid>     
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
        px: { xs:1.75, sm: 3, md: 4, lg: 5, xl: 0 }, 
      }}
    >
      <Grid item xs={12} sx={{display: {md: "none"}, mb: {xs:5, sm: 6}}}>
        {project && <MobileNavigation projects={projects} currentProjectName={project.name} handleProjectChange={handleProjectChange}/>}
      </Grid>
      <Grid item xs={0} xl={2.5}></Grid>
      <Grid item xs={12} md={9.25} lg={9.5} xl={9.15}>
        <Fade in={isShown} timeout={550} unmountOnExit>
          <Box>
            {project && <ProjectItemContent project={project} isShown={isShown}/>}
          </Box>
        </Fade>
      </Grid>   
    </Grid>
      </Box>
    </>
  )
}

export default ProjectItem