import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DocumentHead from '../../components/DocumentHead'
import { Grid, Box, Typography, Fade, Slide, Button } from '@mui/material'
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
    briefDescription: "Moby is a social media web app that incorporates the essential features of a modern social media platform.",
    description: "Moby is a social media web app that incorporates the essential features of a modern social media application. Create an account, set-up your profile, edit and upload your photo, publish posts, add friends, chat and connect with people, and more through moby.",
    technologies: [ "JavaScript", "React", "Redux", "Socket.io", "NodeJs", "ExpressJs", "Sequelize", "MySQL", "Material-UI", "Sass/Scss"],
    type: "personal",
    features: [
      "Create and personalize your own profile",
      "Edit, crop, resize, and upload images", 
      "Create, comment, and like posts for everyone or friends to see",
      "Add/Remove friends",
      "Realtime Database System(chat, friend status updates, notifications)",
      "Secured sessions with httpOnly cookie implementation",
      "Optimize images for faster loading (Imagekit.io)",
      "Encrypt sensitive data (bcryptJS)",
      // "Deployed on Vercel(Client) and Railway(Server and MySQL Database)",
    ],
    url: "https://moby.paolobugarin.com/",
    githubUrl: "https://github.com/Paolo876/moby-social-media-client",
    images: [
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_1.webp?alt=media&token=b54e850b-8777-40fc-bebb-d5984a542758",
      name: "moby_1.webp",
      title: "Login/Sign Up Page",
      description: "This serves as the initial or welcome page when no user is logged in."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_2.webp?alt=media&token=645331f1-5c52-4c63-9aae-40af27505fb8",
      name: "moby_2.webp",
      title: "Home Page",
      description: "Shows public and friends' posts along with an action bar to change user's status and show connected friends."

      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_3.webp?alt=media&token=9d5801d1-a38e-4713-83c7-5666dec1b5c3",
      name: "moby_3.webp",
      title: "Profile Page",
      description: "Shows user's published posts, information, and bio."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_4.webp?alt=media&token=0f7a5ffd-61d9-4574-bfdd-2aa4713f5019",
      name: "moby_4.webp",
      title: "Messages Page",
      description: "Create chat rooms and start chatting with users and friends."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_6.webp?alt=media&token=e2bd1223-688c-4c27-ba44-f27492a0c33a",
      name: "moby_6.webp",
      title: "Create page",
      description: "Create and Publish your own posts."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_5.webp?alt=media&token=acb0481e-7d78-4d83-8e50-1b23275d86da",
      name: "moby_5.webp",
      title: "Private Post Notice",
      description: "A Private Post can only be interacted by a user friends with the author."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_7.webp?alt=media&token=7dc939ac-c548-4684-95d7-1bcfc0c0c7bf",
      name: "moby_7.webp",
      title: "Search Page",
      description: "Search for users and posts."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_8.webp?alt=media&token=709bce2e-528d-4f36-b19a-dc08ded3ab72",
      name: "moby_8.webp",
      title: "Settings Page",
      description: "Change and update your profile information."
      }, 

    ],
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_banner.png?alt=media&token=41f3debd-ed18-43a0-b583-dc56bbb63840",
      name: "moby_banner.png"
    },
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby%2Fmoby_logo_white.png?alt=media&token=50332a5e-72ab-488b-b05d-bedfc9bed076",
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "luna", 
    title: "Luna",
    briefDescription: "Luna is a beautiful browser homepage that allows the user to customize the UI to their preference with many options and features.",
    description: "Luna is a personalizable browser homepage inspired by the google chrome extension 'Momentum'. It features a beautiful UI that can be customized by the user through a variety of options.",
    technologies: [ "JavaScript", "React", "Redux", "Firebase", "Material-UI", "Sass/Scss"],
    type: "personal",
    images: [
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_1.webp?alt=media&token=a360e44f-54e0-4f8b-b6c4-6a447385be57",
      name: "luna_1.webp",
      title: "Main Page",
      description: "Default layout of the app. Components can be hidden or re-arranged freely."

      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_2.webp?alt=media&token=29d23271-0f27-4f1f-a9db-1503652ab62e",
      name: "luna_2.webp",
      title: "General Settings",
      description: "Change User Information and UI preferences."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_3.webp?alt=media&token=1aae850a-4144-420a-b159-a8c49b28bddb",
      name: "luna_3.webp",
      title: "Editor Mode",
      description: "Enter this mode to rearrange components."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_4.webp?alt=media&token=5fbade94-08e2-4ade-82f0-f2105bf3c9ae",
      name: "luna_4.webp",
      title: "Background Selection",
      description: "Select from preset backgrounds or fetch random backgrounds from unsplash.com"
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_5.webp?alt=media&token=c8843892-142c-4e18-8e8d-36d99c2aaee0",
      name: "luna_5.webp",
      title: "Background Adjustments",
      description: "Adjust the background's brightness, contrast, and saturation."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_6.webp?alt=media&token=c4f40f6d-36b1-4493-b024-93fd12ce378e",
      name: "luna_6.webp",
      title: "Component Configurations",
      description: "Enable/disable the component and modify each component's appearance."
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_7.webp?alt=media&token=b68c35db-8609-49aa-bce7-b4f8683b769e",
      name: "luna_7.webp",
      title: "Interface Configurations",
      description: "Modify the base UI's appearance."
      }, 
    ],    
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Fluna_banner.png?alt=media&token=d4769399-437b-4730-bd3a-ff12724afdf7",
      name: "luna_banner.png"
    },
    features: [
      "Interactive and Customizable UI",
      "Display's accurate weather information (if enabled) with Openweathermap api",
      "Generates motivational quotes with Quotable API by Luke Peavey",
      "Fetches beautiful backgrounds on random or default (unsplash api)",
      "Adjust and modify background filter settings",
      "Customize each UI components",
      "Configurations are saved on local storage"
    ],
    url: "http://luna.paolobugarin.com",
    githubUrl: "https://github.com/Paolo876/luna2.0",
    logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fluna%2Flogo.png?alt=media&token=4668b273-2ab8-41e3-a809-ff04871f3ce4",
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
    images: [
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_1.webp?alt=media&token=a10195d3-041f-4a72-9ab9-2ab82c81776b",
      name: "mern_1.webp",
      title: "Home Page",
      description: "The home page shows a carousel of featured products on the header and the list of latest products for sale",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_2.webp?alt=media&token=a4a6e3f4-2811-438b-9313-cdf32ca277e6",
      name: "mern_2.webp",
      title: "Product Page",
      description: "The page showcasing the product with all its description, images, features, and reviews",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_3.webp?alt=media&token=94fea08a-2bd9-4f3d-ae10-4e966fe3b417",
      name: "mern_3.webp",
      title: "Product Options",
      description: "Some products may have its own different variants and is all separated with an option selector",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_4.webp?alt=media&token=d532912f-4c1f-4059-a71d-03a8514035a5",
      name: "mern_4.webp",
      title: "Sign In Page",
      description: "Signing in also uses Google Login Api for faster sign in action",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_5.webp?alt=media&token=71be01d7-94d3-4886-82d5-26044c8af343",
      name: "mern_5.webp",
      title: "Register Page",
      description: "Creating an account also works using Google Api to autofill your information and faster process",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_6.webp?alt=media&token=895d0824-449a-4984-ad34-9d3a850f72e6",
      name: "mern_6.webp",
      title: "Cart Page",
      description: "Shows the products the user added to cart along with an estimated total",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_8.webp?alt=media&token=752996b4-bac0-4f54-82ff-8a5c98a919c4",
      name: "mern_8.webp",
      title: "Shipping Page",
      description: "Shipping Page initially shows saved addresses for faster checkout process",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_7.webp?alt=media&token=7c70e616-2851-4fc9-ac8d-f6ee25c53a7e",
      name: "mern_7.webp",
      title: "Shipping Validation Form",
      description: "For new shipping informations, a new address form is validated with Usps Api for confirmation",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_9.webp?alt=media&token=906ae760-bb48-4ba0-ad4c-70a9fe32640b",
      name: "mern_9.webp",
      title: "Place Order Page",
      description: "Shows the total amount of items with taxes and shipping costs. Uses Paypal Api for payment options",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_10.webp?alt=media&token=48796ff3-6834-4c10-8aea-378b4be65e2e",
      name: "mern_10.webp",
      title: "Order Confirmation Page",
      description: "Upon payment confirmation/success, an order id is generated along with the information about the order",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_11.webp?alt=media&token=6916cd2d-2471-482b-a0dd-aacec39a04ba",
      name: "mern_11.webp",
      title: "Users List Page [ADMIN]",
      description: "Shows a list of users within the app. Admin has the power to appoint a user as admin and to delete a user.",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_12.webp?alt=media&token=12188adc-047a-4b52-ade6-f55dc68a2fda",
      name: "mern_12.webp",
      title: "Products List Page [ADMIN]",
      description: "Shows a list of all the products being sold and actions to edit or delete the product.",
      }, 
      {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmern_13.webp?alt=media&token=960de9f4-3a08-4805-bdd2-5594e5d8a6d2",
      name: "mern_13.webp",
      title: "Orders List Page [ADMIN]",
      description: "Shows the list of orders and actions to change the status of the orders.",
      }, 
    ],
    coverImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmernshop_banner.png?alt=media&token=9addd379-0c63-4748-8c0e-c6c69ffba955",
      name: "mernshop_banner.png"
    },
    logo:"https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmernshop%2Fmernshop_logo.png?alt=media&token=1e35d42c-0221-4be7-aecf-47360d244094",
    features: [
      "Created using the MERN stack with redux state management.",
      "Implements account authentication/validation using Google API (Oauth2.0)",
      "Allows account creation or sign in with Google Login Api",
      "Validates entered address using USPS Address Validation API",
      "Checkout and pay with debit/credit card securely through PayPal API",
      "Included Admin feature for adding/editing products, viewing list of users, and managing list of orders."
    ],
    url: "https://mernshop.paolobugarin.com/",
    githubUrl: "https://github.com/Paolo876/mern-ecommerce-traversy",
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
  const [ isHovered, setIsHovered ] = useState(false);
  const [ isMounted, setIsMounted ] = useState(true);

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

    }, 5000)

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
        pt: {xs:8, sm: 12, md: 14, lg: 14, xl: 18}, 
      }}
    >      
      <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", height: "100%"}}>
        <Grid item lg={6} sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent:{lg: "space-between"}, pb: 10}}>
          <Introduction/>
          <ProjectSelection projects={projects} setActiveProject={setActiveProject} setIsHovered={setIsHovered} activeProject={activeProject}/>
        </Grid>
        <Grid lg={2.75}></Grid>
        <Fade in={true} timeout={800} style={{ transitionDelay: "2400ms" }}>
          <Grid              
            item 
            lg={3.25} 
            align="right" 
            sx={{
              height: "100%",
              display: {xs: "none", lg: "flex"}, 
              flexDirection: "column",
              alignItems: "flex-end", 
              justifyContent: {xs: "flex-end", lg:"center"}, 
              pb: {xs:3.5, sm: 8, md: 8, lg: 12, xl: 12},
            }}
          >
          <Fade in={isMounted} timeout={500} unmountOnExit>
            <Box>
              <Box sx={{opacity: {xs: .6, sm:.75}, width: {xs: 150, sm: 225, md: 250, lg: 250, xl: 250}, height: {xs: 150, sm: 225, md: 250, lg: 250, xl: 250}, transition: "all 1s ease"}}>
                <Image src={projects[activeProject].logo} duration={250} fit="scale-down"/>
              </Box>
              <Box sx={{mt: {xs:1.5, sm: 2.5, md:5}, borderRight: 1, borderColor: {xs: "transparent", sm:"primary.dark"}, pr: {sm:1}}}>
                <Typography 
                  variant="body2"
                  sx={{
                    fontSize: {md: 13, lg:14, xl: 14.5},
                    fontWeight: 100,
                    opacity: .5,
                    letterSpacing: .5,
                    lineHeight: 1.45,
                    textShadow: "1px 1px 5px rgba(150,150,150,.75)",
                  }} 
                >{projects[activeProject].briefDescription}</Typography>
              </Box>
              <Button>Read more about {projects[activeProject].title} here</Button>
            </Box>
          </Fade>
          </Grid>
        </Fade>
      </Grid>

      {/* background  */}
      <Box sx={{position: "fixed", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1, px: { xs:1.75, sm: 3, md: 4, lg: 5 }}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
          <Grid item xs={0} lg={0}></Grid>
          <Slide in={true} timeout={900} direction="left">
          <Grid 
            item 
            xs={7}
            sm={8} 
            md={9} 
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
              md={3}
              lg={3} 
              xl={3}
              align="right" 
              sx={{
                height: {xs: "95vh", sm: "95vh", md: "95vh", lg:"95vh"}, 
                display: {xs:"flex", lg: "none"}, 
                flexDirection: "column",
                alignItems: "flex-end", 
                justifyContent: {xs: "flex-end", lg:"center"}, 
                zIndex: -2,
                pb: {xs:3.5, sm: 8, md: 8, lg: 12, xl: 12},
              }}
            >
              <Fade in={isMounted} timeout={500} unmountOnExit>
                <Box>
                  <Box sx={{opacity: {xs: .6, sm:.75}, width: {xs: 150, sm: 225, md: 270, lg: 270, xl: 270}, height: "auto", transition: "all 1s ease"}}>
                    <Image src={projects[activeProject].logo} duration={250}/>
                  </Box>
                  <Box sx={{mt: {xs:1.5, sm: 2.5, md:5}, borderRight: 2, borderColor: {xs: "transparent", sm:"primary.dark"}, pr: {sm:1}}}>
                    <Typography 
                      variant="body2"
                      sx={{
                        fontSize: {xs: 10, sm: 12, md: 13, lg:14, xl: 14.5},
                        fontWeight: 200,
                        opacity: .5,
                        letterSpacing: .5,
                        lineHeight: 1.45,
                        textShadow: "1px 1px 5px rgba(150,150,150,.75)",
                      }} 
                    >{projects[activeProject].briefDescription}</Typography>
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
