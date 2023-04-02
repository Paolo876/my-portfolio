import { useState, useEffect } from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import useFirestoreActions from '../../hooks/useFirestoreActions'

import { Grid, Typography, Box, Divider } from '@mui/material'
import ProjectNavigation from './ProjectNavigation'
import ProjectsList from './ProjectsList'
import Footer from '../../components/Footer'
import SocialLinks from '../../components/SocialLinks'

const MOCK_PROJ_LIST = [
  {
    name: "moby", 
    title: "Moby",
    description: "Moby is a social media web app that incorporates the essential features of a modern social media application. Simply creating your account and setting up your profile, you can start publishing posts, add friends, and connect with other people through moby.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "personal",
    images: ["", ""],
    coverImage: "",
    features: [
      "A FullStack Project implementing CRUD operations", 
      "Realtime Database Management System(chat system, friend updates, notification system)", 
      "Sensitive Data Encryption through bcryptJS",
      "Client-Side application deployed on Vercel",
      "Server-Side application deployed on Railway",
    ],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
  {
    name: "mernshop", 
    title: "MernShop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "personal",
    images: [],
    coverImage: "",
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
  {
    name: "downtownsuitsdirect", 
    title: "Downtown Suits Direct",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "commissioned",
    images: [],
    coverImage: "",
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",

  },
  {
    name: "luna", 
    title: "Luna",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "personal",
    images: [],
    coverImage: "",
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
  {
    name: "carlportfolio", 
    title: "Carl Dimabuyu Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "commissioned",
    images: [],
    coverImage: "",
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
  {
    name: "aynportfolio", 
    title: "Ayn Laquindanum Portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "commissioned",
    images: [],
    coverImage: "",
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
  {
    name: "cimt", 
    title: "CERT Incident Management Tool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "school",
    images: [],
    coverImage: "",
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
]


const Projects = () => {
  const [ projects, setProjects ] = useState(MOCK_PROJ_LIST)
  const { skillsList, dispatch } = useAppContext();
  const { getDocumentFromCollection } = useFirestoreActions();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => dispatch({ type: 'SET_SKILLS', payload: data.skills }))
    }
  }, [])


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
            {skillsList.length !==0 && <ProjectsList projects={projects} skillsList={skillsList}/>}
          </Grid>
          <Grid item xs={12} my={.25}><Footer/></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
