import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useRootRedux from '../../hooks/useRootRedux'
import useFirestoreActions from '../../hooks/useFirestoreActions'
import DocumentHead from '../../components/DocumentHead'

import { Grid, Box, Stack } from '@mui/material'
// import ProjectNavigation from './ProjectNavigation'
// import ProjectsList from './ProjectsList'
import Footer from '../../components/Footer'
import Introduction from './Introduction'
import ProjectsList from './ProjectsList'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './ProjectPage/ProjectPage'


const MOCK_PROJ_IMG = {
  url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_banner.png?alt=media&token=4f2813bc-7201-4b53-abeb-48a4de04e297",
  name: "test_title"
}
const MOCK_PROJ_LIST = [
  {
    name: "moby", 
    title: "Moby",
    briefDescription: "Moby is a social media web app that incorporates the essential features of a modern social media application.",
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
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_banner.png?alt=media&token=4f2813bc-7201-4b53-abeb-48a4de04e297",
      name: "moby_banner.png"
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "mernshop", 
    title: "MernShop",
    briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "MernShop is an e-commerce web application demo inspired by TraversyMedia's ReactJS Udemy Course. It showcases the system and functionalities of an e-commerce application with extra security and validation features.",
    technologies: [ "JavaScript", "React", "Redux", "NodeJs", "ExpressJs", "MongoDB", "Bootstrap"],
    type: "personal",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop_banner.png?alt=media&token=f000fecf-4cd1-48a1-959c-845809e8fcbb",
      name: "mernshop_banner.png"
    },
    features: [
      "Created using the MERN stack with redux state management.",
      "Implements account authentication/validation using Google API (Oauth2.0)",
      "Validates entered address using USPS Address Validation API",
      "Checkout and pay with debit/credit card securely through PayPal API"
    ],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "downtownsuitsdirect", 
    title: "Downtown Suits Direct",
    briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Downtown Suits Direct is a men's suit and tailor shop located in Pico Rivera, California. It is a commissioned project that I designed and developed using React and Firebase.",
    technologies: [ "JavaScript", "React","Firebase", "Sass/Scss"],
    type: "commissioned",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fdsd_banner.png?alt=media&token=ac912112-24cd-442e-9489-ef300abfb0d0",
      name: "dsd_banner.png",
    },
    features: [
      "aos animations applied on components",
      "Implemented Yelp api to display customer reviews and feedbacks",
      "Image optimization using Imagekit.io api",

    ],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }

  },
  {
    name: "luna", 
    title: "Luna",
    briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Luna is a beautiful personalizable browser homepage inspired by the google chrome extension 'Momentum'. It features a UI that the user can freely customize through rearranging the components or elements positioning, font properties, and UI colors.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "personal",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "carlportfolio", 
    title: "Carl Dimabuyu Portfolio",
    briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "commissioned",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "aynportfolio", 
    title: "Ayn Laquindanum Portfolio",
    briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "commissioned",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "cimt", 
    title: "CERT Incident Management Tool",
    briefDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "Javascript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "MySQL"],
    type: "school",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: MOCK_PROJ_IMG,
    features: [],
    url: "http://www.google.com",
    githubUrl: "http://www.google.com",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
]


const Projects = () => {
  const [ projects, setProjects ] = useState(MOCK_PROJ_LIST);
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  const { skillsList, setData } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setData(data))
    }
    navigate(pathname, {})
  }, [])

  useEffect(() => {
    if(state && projects.length !== 0) {
      window.scrollTo(0, state.screenView);
    }
  }, [state])

  return (
    <>
      <DocumentHead
        title="Paolo Bugarin | Projects"
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Routes>
        <Route 
          element={
            <Stack>
              <Grid container sx={{px: {xs:3, sm: 3, md: 1.5, lg: 3}, pt: {xs:10, sm: 11, md: 13, lg: 13, xl: 14}, pb: 8, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", minHeight: "100vh"}}>
                <Grid item xs={12} lg={2.25}>
                  <Introduction/>
                </Grid>
                <Grid item xs={12} lg={9.75}>
                  {projects && <ProjectsList projects={projects}/>}
                </Grid>
              </Grid>
              <Box mt="auto" ml={{md:"auto"}} sx={{position: "absolute", bottom: 5, right: 5}}><Footer/></Box>
            </Stack>
          } 
          path="/"
        />
        <Route element={projects && <ProjectPage projects={projects}/>} path="/:id"/>
      </Routes>
    </>
  )
}

export default Projects
