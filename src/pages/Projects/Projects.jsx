import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DocumentHead from '../../components/DocumentHead'
import { Grid, Box, Typography } from '@mui/material'
import Introduction from './Introduction'
import { Route, Routes } from 'react-router-dom'
import Image from 'mui-image'
import ProjectSelection from './ProjectSelection'
import ProjectItem from './ProjectItem/ProjectItem'

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
      "Realtime Database System(chat, friend status updates, notifications)", 
      "Create and personalize your own account",
      "Edit, crop, resize, and upload images", 
      "Optimizes images for faster loading with Imagekit.io",
      "Encrypts sensitive data with bcryptJS",
      "Deployed on Vercel(Client) and Railway(Server and MySQL Database)",
    ],
    url: "https://moby.paolobugarin.com/",
    githubUrl: "https://github.com/Paolo876/moby-social-media-client",
    images: [
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_1.webp?alt=media&token=5b04da84-3fb6-4a64-9696-6888062acd40",
      name: "moby_1.webp",
      title: "Welcome/Login Page"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_2.webp?alt=media&token=fcf0ea56-8abd-4ea5-91bb-3ef31c74e4ca",
      name: "moby_2.webp",
      title: "Home Page"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_3.webp?alt=media&token=2f0dbef8-bf61-4782-af68-e0b25d77192f",
      name: "moby_3.webp",
      title: "Profile Page"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_4.webp?alt=media&token=4ed6a274-b170-47a3-9ccb-49e20ea79a6f",
      name: "moby_4.webp",
      title: "Settings Page"
      }, 
    ],
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
    name: "luna", 
    title: "Luna",
    briefDescription: "Luna is a beautiful browser homepage alternative that allows the user to customize the UI to their preference with many options and features.",
    description: "Luna is a personalizable browser homepage alternative inspired by the google chrome extension 'Momentum'. It features a beautiful UI that can be customized by the user through a variety of options.",
    technologies: [ "JavaScript", "React", "Redux", "Firebase", "Material-UI", "Sass/Scss"],
    type: "personal",
    images: [
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_1.webp?alt=media&token=42025a57-7ae5-4ac1-8806-7f3885dd6d8e",
      name: "luna_1.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_2.webp?alt=media&token=5aa23eaf-7312-45a0-9f30-0930c7b690e5",
      name: "luna_2.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_3.webp?alt=media&token=e9645459-01d3-4855-ae45-75e6fa3f7a18",
      name: "luna_3.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_4.webp?alt=media&token=fb69e6dc-0049-4dd3-aa03-01990576fba5",
      name: "luna_4.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_5.webp?alt=media&token=3d4cd222-cb9f-409e-8d69-e02eaa94f3cf",
      name: "luna_5.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_6.webp?alt=media&token=b10b51e0-24fc-42d2-a361-7568fa3fc153",
      name: "luna_6.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_7.webp?alt=media&token=2f974a92-f1f6-4be1-b1af-88ef8c579338",
      name: "luna_7.webp"
      }, 
    ],    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_banner.png?alt=media&token=aca8d0cd-9b7f-40bd-b425-a04e391bc26b",
      name: "luna_banner.png"
    },
    features: [
      ""
    ],
    url: "http://luna.paolobugarin.com",
    githubUrl: "https://github.com/Paolo876/luna2.0",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna_banner.png?alt=media&token=aca8d0cd-9b7f-40bd-b425-a04e391bc26b",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "mernshop", 
    title: "MernShop",
    briefDescription: "MernShop is an e-commerce web app demo inspired from TraversyMedia's ReactJS Udemy Course.",
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
      "Checkout and pay with debit/credit card securely through PayPal API",
      "Included Admin feature for adding/editing products, viewing list of users, and managing list of orders."
    ],
    url: "https://mernshop.paolobugarin.com/",
    githubUrl: "https://github.com/Paolo876/mern-ecommerce-traversy",
    logo: "",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "downtownsuitsdirect", 
    title: "Downtown Suits Direct",
    briefDescription: "Downtown Suits Direct is a men's suit and tailor shop located in Pico Rivera, California.",
    description: "Downtown Suits Direct is a men's suit and tailor shop located in Pico Rivera, California. It is a commissioned project that I designed and developed using React and Firebase.",
    technologies: [ "JavaScript", "React","Firebase", "Material-UI", "Sass/Scss"],
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
      "Inquiry form forwards data to client's email using EmailJS api"
    ],
    url: "https://downtownsuitsdirectla.web.app/",
    githubUrl: "https://github.com/Paolo876/downtownsuitsdirect",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }

  },
  {
    name: "carlportfolio", 
    title: "Carl Adriant Portfolio",
    briefDescription: "A web portfolio of an architect based in Doha, Qatar that I designed and developed.",
    description: "A web portfolio of an architect based in Doha, Qatar that I designed and developed.",
    technologies: [ "JavaScript", "React", "Firebase", "Material-UI", "Sass/Scss"],
    type: "commissioned",
    images: [
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fcarl_1.webp?alt=media&token=23c18278-e0fb-4b49-bdd8-79ebb0075099",
      name: "carl_1.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fcarl_2.webp?alt=media&token=3bd54ca5-770f-4e55-a5c1-4142d83932ea",
      name: "carl_2.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fcarl_3.webp?alt=media&token=771a7033-e8fb-47f8-be00-ee098671190c",
      name: "carl_3.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fcarl_4.webp?alt=media&token=2e059571-68e5-4eb2-8963-c0d15b6baa4d",
      name: "carl_4.webp"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fcarl_5.webp?alt=media&token=5d72b68a-0a12-4810-9029-8d12c989d2fb",
      name: "carl_5.webp"
      }, 
    ],    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fcarl_banner.png?alt=media&token=06a4d3db-9648-4dff-af53-8dbcc0ad0312",
      name: "carl_banner.png"
    },
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
    title: "Ayn Nicoli Portfolio",
    briefDescription: "A web portfolio of a graphic artist/architect based in Philippines that I designed and developed.",
    description: "A web portfolio of a graphic artist/architect based in Philippines that I designed and developed.",
    technologies: [ "JavaScript", "React", "Firebase", "Material-UI", "Sass/Scss"],
    type: "commissioned",
    images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fayn_banner.png?alt=media&token=26cb8b13-e460-41ce-aa8d-ba0502bde917",
      name: "ayn_banner.png"
    },
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
    title: "C.I.M.T.",
    briefDescription: "CERT Incident Management Tool (CIMT) is a software solution to manage available resources to various emergency incidents that is occurring or may occur.",
    description: "CERT Incident Management Tool is the finals project of my Server-side Development class in Pasadena City College. This app is a software solution to manage available resources and their assignments to various emergency incidents that is occurring or may occur. It is developed using React, Node, Express, Sequelize, and MySql stack.",
    technologies: [ "JavaScript", "React", "Redux", "NodeJs", "ExpressJs", "MySQL", "Sequelize"],
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

  // const { getDocumentFromCollection } = useFirestoreActions();

  // useEffect(() => {
  //   if(skillsList.length === 0){
  //     getDocumentFromCollection('user', 'information').then(data => setData(data))
  //   }
  //   navigate(pathname, {})
  // }, [])

  // useEffect(() => {
  //   if(state && projects.length !== 0) {
  //     window.scrollTo(0, state.screenView);
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [state])

  
  return (
    <>
    <DocumentHead
      title="Paolo Bugarin | Projects"
      description="I am a full stack web developer based in Los Angeles, California"
      keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
    />
    <Routes>
      <Route path="/" element={<MainPage projects={projects}/>}/>
      <Route path="/:id" element={<ProjectItem projects={projects}/>}/>
    </Routes>
  </>
  )
}

const MainPage = ({ projects }) => {
  const [ activeProject, setActiveProject ] = useState(0);
  const [ isHovered, setIsHovered ] = useState(false)

  useEffect(() => {
    const interval = setInterval(
      () => setActiveProject(prevState => {
        if(prevState === projects.length - 1) {
          return 0
        } else {
          return prevState + 1
        }
      }), 6000)
    if(isHovered) clearInterval(interval) 
    return () => clearInterval(interval)  
  }, [isHovered])


  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative", 
        px: { xs:1.75, sm: 3, md: 4, lg: 5 }, 
        pt: {xs:8, sm: 11, md: 13, lg: 13, xl: 15},  
      }}
    >      
      <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
        <Grid item md={12} lg={3.5}>
          <Introduction/>
        </Grid>
        <Grid item md={6} lg={5} sx={{height: "100%", my: "auto"}} pt={{xs: 1.5, sm: 6, md: 8, lg: 0}} pl={{md: 1, lg: 0}} mr={{xs: "auto", lg: "initial"}}>
          <ProjectSelection projects={projects} setActiveProject={setActiveProject} setIsHovered={setIsHovered} activeProject={activeProject}/>
        </Grid>
        <Grid item md={0} lg={3.5}></Grid>
      </Grid>

      {/* background  */}
      <Box sx={{position: "fixed", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1, px: { xs:1.75, sm: 3, md: 4, lg: 5 }}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
          <Grid item xs={0} lg={3}></Grid>
          <Grid 
            item 
            xs={7}
            sm={8} 
            md={9} 
            lg={6} 
            sx={{
              background: "rgba(45,45,45,.1)", 
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
                width: "100%",
                background: "rgba(45,45,45,.2)", 
                display: {md: "none"},
                transform: {xs:"translateX(-100%)"},
              }
            }}
            ></Grid>
          <Grid 
            item 
            xs={5}
            sm={4}
            md={3}
            lg={3} 
            align="right" 
            sx={{
              height: {xs: "95vh", sm: "95vh", md: "95vh", lg:"95vh"}, 
              display: "flex", 
              flexDirection: "column",
              alignItems: "flex-end", 
              justifyContent: "flex-end", 
              zIndex: -2,
              pb: {xs:3.5, sm: 8, md: 8, lg: 12, xl: 12},
            }}
          >
            <Box sx={{opacity: {xs: .6, sm:.75}, width: {xs: 150, sm: 225, md: 270, lg: 270, xl: 280}, height: "auto"}}>
              <Image src={projects[activeProject].logo} duration={200}/>
            </Box>
            <Box sx={{mt: {xs:1.5, sm: 2.5, md:5}, borderRight: 2, borderColor: {xs: "transparent", sm:"primary.dark"}, pr: {sm:1}}}>
              <Typography 
                variant="body2"
                sx={{
                  fontSize: {xs: 9.5, sm: 12, md: 13, lg:14, xl: 15.5},
                  fontWeight: 300,
                  opacity: {xs: .5, sm:.65},
                  letterSpacing: .3,
                  lineHeight: 1.4,
                  textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                }} 
              >{projects[activeProject].briefDescription}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
