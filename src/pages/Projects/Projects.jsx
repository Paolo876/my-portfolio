import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Grid, Box, Typography, Fade, Slide, Button, ButtonBase } from '@mui/material'
import Image from 'mui-image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IKImage } from 'imagekitio-react';


//components
import DocumentHead from '../../components/DocumentHead'
import Introduction from './Introduction'
import ProjectSelection from './ProjectSelection'
import ProjectItem from './ProjectItem/ProjectItem'

//hooks
import useRootRedux from '../../hooks/useRootRedux';
import useProjectsRedux from '../../hooks/useProjectsRedux';

const Projects = () => {
  const { projectsList, isLoading, error } = useProjectsRedux();
  return (
    <>
    <DocumentHead
      title="Paolo Bugarin | Projects"
      description="I am a full stack web developer based in Los Angeles, California"
      keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
    />
    <Routes>
      {projectsList !== 0 && !isLoading && <>
        <Route path="/" element={<MainPage projects={projectsList}/>}/>
        <Route path="/:id" element={<ProjectItem projects={projectsList}/>}/>
      </>}
    </Routes>
  </>
  )
}


const MainPage = ({ projects }) => {
  const [ activeProject, setActiveProject ] = useState(0);
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isMounted, setIsMounted ] = useState(true);
  const { imageKeys } = useRootRedux();
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setIsMounted(false)
      setTimeout(() => {
        setActiveProject(prevState => {
            if(prevState === projects.length - 1) {
              return 0
            } else {
              return prevState + 1
            }
          });
          setIsMounted(true)
      }, 500)

    }, 5500)

    if(isHovered) clearInterval(interval);
    return () => clearInterval(interval); 
  }, [isHovered])



  return (
    <Box
      sx={{
        height: {xs: "92vh", md:"96vh", lg: "100vh"}, 
        width: "100%",
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:9, sm: 12, md: 14, lg: 14, xl: 16}, 
      }}
    >      
      <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", height: "100%"}}>
        <Grid 
          item 
          lg={6} 
          sx={{
            height: {lg:"100%"}, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent:{lg: "space-between"}, 
            pb: {xs: 5, sm: 10}, 
            pl: .5, 
            width: "fit-content",
            zIndex: 1
          }}
        >
          <Introduction/>
          <ProjectSelection projects={projects} setActiveProject={setActiveProject} setIsHovered={setIsHovered} activeProject={activeProject}/>
        </Grid>
        <Grid item lg={2.75}></Grid>
        <Fade in={true} timeout={800} style={{ transitionDelay: "2400ms" }}>
          <Grid
            onMouseOver={() => setIsHovered(true)}        
            onMouseLeave={() => setIsHovered(false)}        
            item 
            lg={3.25} 
            align="right" 
            sx={{
              height: "100%",
              display: {xs: "none", lg: "flex"}, 
              flexDirection: "column",
              alignItems: "flex-end", 
              justifyContent: {xs: "flex-end", lg:"center"}, 
              pb: 10,
              px: 1,
            }}
          >
          <Fade in={isMounted} timeout={500} unmountOnExit>
            <Box 
              sx={{
                display: {xs: "none", lg: "flex"}, 
                flexDirection: "column",
                alignItems: "flex-end", 
                justifyContent: {xs: "flex-end", lg:"center"},      
              }}
            >
              <Box 
                sx={{
                  opacity: .7, 
                  transition: "all 1s ease",
                  maxHeight: "45%",
                  maxWidth: "50%"
                }}>
                <Image 
                  src={projects[activeProject].logo.url}
                  alt={projects[activeProject].logo.name} 
                  fit="scale-down"
                />
              </Box>
              <Box sx={{mt: 4, borderRight: 1, borderColor: {xs: "transparent", sm:"primary.dark"}, pr: 1}}>
                <Typography 
                  variant="body2"
                  sx={{
                    fontSize: {lg:14},
                    fontWeight: 100,
                    opacity: .75,
                    letterSpacing: .5,
                    lineHeight: 2,
                    textShadow: "1px 1px 5px rgba(150,150,150,.75)",
                    transform: "skewX(-7deg)"
                  }} 
                >{projects[activeProject].briefDescription}</Typography>
              </Box>
              <Box sx={{mt: 8}}>
                <ButtonBase 
                  onClick={() => navigate(`${projects[activeProject].name}`)}
                  sx={{                
                    fontSize: { lg: "1rem" },
                    lineHeight: 1.4, 
                    color: "white", 
                    transform: "skewX(-7deg)",
                    py: .85,
                    fontWeight: 600,
                    letterSpacing: 2.2,
                    transition: "transform 200ms ease-in-out, border 200ms ease-in-out",
                    fontFamily: "Manrope",
                    textTransform: "uppercase",
                    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                    display: "flex",
                    gap: 1.25,
                    opacity:.75,
                    "&:hover":{
                      opacity:1,
                      transform: "scale(1.02) skewX(-7deg)",
                    }}
                  }
                >
                  Read more <ArrowForwardIosIcon style={{fontSize: "inherit",}} color="primary"/>
                </ButtonBase>
              </Box>
            </Box>
          </Fade>
          </Grid>
        </Fade>
      </Grid>

      {/* background  */}
      <Box sx={{position: "fixed", height: "100%", width: "100%", top: 0, left: 0, zIndex: {lg: -1}, px: { xs:1.75, sm: 3, md: 4, lg: 5 }}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
          <Grid item xs={0} lg={0}></Grid>
          <Slide in={true} timeout={900} direction="left">
          <Grid 
            item 
            xs={7}
            sm={8} 
            md={8.5} 
            lg={7} 
            xl={7}
            >
              <Box            
                sx={{
                  background: "rgba(40,40,40,.1)", 
                  height: "100vh", 
                  width: "100%", 
                  transform: {xs:"skewX(-5deg) translateX(-0px)", sm:"skewX(-5deg) translateX(-50px)", md:"skewX(-7deg) translateX(-120px)", lg:"skewX(-7deg)"},
                  position: "relative",
                  mixBlendMode: "difference",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left:0,
                    height: "100%",
                    width: "200%",
                    background: "rgba(40,40,40,.1)", 
                    transform: {xs:"translateX(-100%)"},
                    transition: "all 500ms ease",
                  }
                }}></Box>
            </Grid>
            </Slide>
          <Grid item xs={0} lg={2} xl={2}></Grid>
          <Fade in={true} timeout={800} style={{ transitionDelay: "2400ms" }}>
            <Grid 
              item 
              xs={5}
              sm={4}
              md={3.5}
              lg={3} 
              xl={3}
              align="right" 
              sx={{
                height: {xs: "98vh", sm: "94vh", md: "90vh", lg:"95vh"}, 
                display: {xs:"flex", lg: "none"}, 
                flexDirection: "column",
                alignItems: "flex-end", 
                justifyContent: {xs: "flex-end", lg:"center"}, 
                zIndex: {lg:-2},
                pb: {xs:3, sm: 8, md: 8, lg: 12, xl: 12},
              }}
            >
              <Fade in={isMounted} timeout={500} unmountOnExit>
                <Box sx={{
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: "flex-end", 
                  justifyContent: "flex-end", 

                }}>
                  <Box 
                    sx={{
                      opacity: {xs: .15, sm:.75}, 
                      height: "auto", 
                      maxHeight: {xs: "100%", sm: "40%", md: "50%"},
                      maxWidth: {xs: "100%", sm:"80%"},
                      transition: "all 1s ease"
                    }}
                  >
                    <Image 
                      src={projects[activeProject].logo.url}
                      alt={projects[activeProject].logo.name} 
                      fit="scale-down"
                    />                  
                  </Box>
                  <Box sx={{mt: {xs:2, sm: 3, md: 5}, borderRight: 2, borderColor: {xs: "transparent", sm:"primary.dark"}, pr: {sm:1}, display: {xs: "none", sm: "block"}}}>
                    <Typography 
                      variant="body2"
                      sx={{
                        fontSize: {xs: 10, sm: 12, md: 14},
                        fontWeight: 100,
                        opacity: .75,
                        letterSpacing: .5,
                        lineHeight: {xs: 1.5, sm: 1.5, md: 1.8},
                        textShadow: "1px 1px 5px rgba(150,150,150,.75)",
                        transform: "skewX(-7deg)",
                        textShadow: "1px 1px 5px rgba(150,150,150,.75)",
                      }} 
                    >{projects[activeProject].briefDescription}</Typography>
                  </Box>
                  <Box sx={{mt: {sm: 7, md:9}, display: {xs: "none", sm: "block"}}}>
                    <ButtonBase 
                      onClick={() => navigate(`${projects[activeProject].name}`)}
                      sx={{                
                        fontSize: { md: "1.1rem" },
                        lineHeight: 1.4, 
                        color: "white", 
                        transform: "skewX(-7deg)",
                        py: .85,
                        fontWeight: 600,
                        letterSpacing: 2.2,
                        transition: "transform 200ms ease-in-out, border 200ms ease-in-out",
                        fontFamily: "Manrope",
                        textTransform: "uppercase",
                        textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                        display: "flex",
                        gap: 1.25,
                        opacity: 1,
                      }}
                    >
                      Read more <ArrowForwardIosIcon style={{fontSize: "inherit",}} color="primary"/>
                    </ButtonBase>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
