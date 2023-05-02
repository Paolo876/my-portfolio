import { useState, useEffect } from 'react'
import useRootRedux from '../../hooks/useRootRedux'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import DocumentHead from '../../components/DocumentHead'

import { Grid, Box, Stack } from '@mui/material'
import ProjectNavigation from './ProjectNavigation'
import ProjectsList from './ProjectsList'
import Footer from '../../components/Footer'
import Introduction from './Introduction'


const MOCK_PROJ_IMG = {
  url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Ftest_proj_img.png?alt=media&token=c9d6154f-2bcf-4afb-9a2a-c490320b04c9",
  name: "test_title"
}
const MOCK_PROJ_LIST = [
  {
    name: "moby", 
    title: "Moby",
    description: "Moby is a social media web app that incorporates the essential features of a modern social media application. Simply by creating an account and setting up your profile, you can start publishing posts, add friends, and connect with other people through moby.",
    technologies: [ "JavaScript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "Sequelize", "MySQL", "Material-UI", "Sass/Scss"],
    type: "personal",
    features: [
      "A FullStack Application implementing CRUD operations", 
      "Realtime Database Management System(chat system, friend updates, notification system)", 
      "Sensitive Data Encryption through bcryptJS",
      "Image optimization using Imagekit.io api",
      "Deployed on Vercel(Client) and Railway(Server)",
    ],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
  },
  {
    name: "mernshop", 
    title: "MernShop",
    description: "MernShop is an e-commerce web application demo inspired by TraversyMedia's ReactJS Udemy Course. It showcases the system and functionalities of an e-commerce application with extra security and validation features.",
    technologies: [ "JavaScript", "React", "Redux", "NodeJs", "ExpressJs", "MongoDB", "Bootstrap"],
    type: "personal",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [
      "Created using the MERN stack with redux state management.",
      "Implements account authentication/validation using Google API (Oauth2.0)",
      "Validates entered address using USPS Address Validation API",
      "Checkout and pay with debit/credit card securely through PayPal API"
    ],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
  {
    name: "downtownsuitsdirect", 
    title: "Downtown Suits Direct",
    description: "Downtown Suits Direct is a men's suit and tailor shop located in Pico Rivera, California. It is a commissioned project that I designed and developed using React and Firebase.",
    technologies: [ "JavaScript", "React","Firebase", "Sass/Scss"],
    type: "commissioned",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [
      "aos animations applied on components",
      "Implemented Yelp api to display customer reviews and feedbacks",
      "Image optimization using Imagekit.io api",

    ],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",

  },
  {
    name: "luna", 
    title: "Luna",
    description: "Luna is a beautiful personalizable browser homepage inspired by the google chrome extension 'Momentum'. It features a UI that the user can freely customize through rearranging the components or elements positioning, font properties, and UI colors.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "personal",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
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
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
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
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
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
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
  },
]


const Projects = () => {
  const [ projects, setProjects ] = useState(MOCK_PROJ_LIST);
  const [ currentActiveProject, setCurrentActiveProject ] = useState(null);
  const { skillsList, setData } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
  }, [])


  return (
    <Stack sx={{pt: 8, height: "100vh", overflowX: "hidden"}}>
      <DocumentHead
        title="Paolo Bugarin | Projects"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      
      <Grid container sx={{px: {xs:3, sm: 3, md: 1.5, lg: 3}, py: {xs:8, sm: 8, md: 8, lg: 8, xl: 8}, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", minHeight: "90vh"}}>
        <Grid item xs={3}>
          <Introduction/>
        </Grid>
        <Grid item xs={9} sx={{border: 1, height: "100%"}}>
        </Grid>
      </Grid>
      <Box mt="auto" ml="auto" mr={1}><Footer/></Box>

      {/* {projects && <Box>
        <Grid container mt={5} sx={{justifyContent: "center", maxWidth: "1920px", mx: "auto"}}>
          <Grid item xs={1.5} sx={{position: "relative"}}>
            <Box sx={{position: "fixed", height: "100%", width: "fit-content"}}>
              <ProjectNavigation 
                projects={projects} 
                currentActiveProject={currentActiveProject}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Introduction/>
            {skillsList.length !==0 && <ProjectsList projects={projects} setCurrentActiveProject={setCurrentActiveProject}/>}
          </Grid>
          
          <Grid item xs={12} mb={.25} mt={"30vh"}><Footer/></Grid>
        </Grid>
      </Box>} */}
    </Stack>
  )
}

export default Projects
