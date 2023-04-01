import { useState } from 'react'
import { Grid, Typography, Box, Divider } from '@mui/material'
import ProjectNavigation from './ProjectNavigation'
import ProjectsList from './ProjectsList'
import Footer from '../../components/Footer'
import SocialLinks from '../../components/SocialLinks'

const MOCK_PROJ_LIST = [
  {
    name: "moby", 
    title: "Moby",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "personal",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",
  },
  {
    name: "mernshop", 
    title: "MernShop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "personal",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",
  },
  {
    name: "downtownsuitsdirect", 
    title: "Downtown Suits Direct",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "commissioned",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",

  },
  {
    name: "luna", 
    title: "Luna",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "personal",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",
  },
  {
    name: "carlportfolio", 
    title: "Carl Dimabuyu Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "commissioned",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",
  },
  {
    name: "aynportfolio", 
    title: "Ayn Laquindanum Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "commissioned",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",
  },
  {
    name: "cimt", 
    title: "CERT Incident Management Tool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "school",
    images: [],
    coverImage: "",
    features: [],
    url: "",
    githubUrl: "",
  },
]


const Projects = () => {
  const [ projects, setProjects ] = useState(MOCK_PROJ_LIST)




  if(projects) return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
      <Box>
        <Grid container mt={5} sx={{justifyContent: "center", maxWidth: "1920px", mx: "auto"}}>
          <Grid item xs={1.75} sx={{position: "relative"}}>
            <Box sx={{position: "fixed", height: "100%", width: "fit-content"}}>
              <Box sx={{background: "white", height: "4px", width: "20px", my: 2}}></Box>
              <ProjectNavigation projects={projects}/>
            </Box>
          </Grid>
          <Grid item xs={7.5}>
            <Box                
              sx={{
                opacity: .9, 
                mixBlendMode: "difference", 
              }}
              >
              <Typography 
                variant="h1" 
                sx={{
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: "7rem",
                  lineHeight: .95,
                }}
                >My<br/> Projects</Typography>
            </Box>
            <Box sx={{px: 4, my: 8, mixBlendMode: "difference"}}>
              <Box sx={{background: "white", height: "4px", width: "20px", my: 2}}></Box>
              <Typography variant="body1" mb={4} fontWeight={200} fontSize={17} letterSpacing={.25} lineHeight={1.75}>
                Listed are my published projects that I still continue to develop and improve over time. 
                Please feel free to check out the demo or git repository of my projects and let me know if you have any remarks or suggestions.
              </Typography>
              <Divider flexItem><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="row"/></Divider>
            </Box>
            <ProjectsList projects={projects}/>
          </Grid>
          <Grid item xs={12} my={.25}><Footer/></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
