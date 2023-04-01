import { useState } from 'react'
import { Grid, Typography, Box, Container } from '@mui/material'
import ProjectNavigation from './ProjectNavigation'
import ProjectsList from './ProjectsList'
import PageContainer from "../../components/PageContainer"


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


  return (
    <Box sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
        <Grid container mt={2} sx={{justifyContent: "center", maxWidth: "1900px", mx: "auto", height: "100%"}}>
          <Grid item xs={2} sx={{position: "relative"}}>
            <Typography variant="h6">My Projects</Typography>
            <Box sx={{background: "white", height: "4px", width: "20px", my: 2}} ></Box>
            <ProjectNavigation projects={projects}/>
          </Grid>
          <Grid item xs={7} sx={{overflowY: "auto", maxHeight: "auto"}}>
            <ProjectsList/>
          </Grid>
        </Grid>
    </Box>
  )
}

export default Projects