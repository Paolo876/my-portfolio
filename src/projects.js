const projects = [
  {
    name: "moby", 
    title: "Moby",
    briefDescription: "A social media web app that incorporates the essential features of a modern social media platform.",
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
      "Mobile Responsive UI",
    ],
    url: "https://moby.paolobugarin.dev/",
    githubUrl: "https://github.com/Paolo876/moby-social-media-client",
    images: [
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_1_YJYz-af4eJ.webp?updatedAt=1696574760052",
      name: "moby_1_YJYz-af4eJ.webp",
      title: "Login/Sign Up Page",
      description: "This serves as the initial or welcome page when no user is logged in."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_2_vjfC-i8Do.webp?updatedAt=1696574759917",
      name: "moby_2_vjfC-i8Do.webp",
      title: "Home Page",
      description: "Shows public and friends' posts along with an action bar to change user's status and show connected friends."

      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_3_LLaE9FP68s.webp?updatedAt=1696574759649",
      name: "moby_3_LLaE9FP68s.webp",
      title: "Profile Page",
      description: "Shows user's published posts, information, and bio."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_4_dusWQoqCFv.webp?updatedAt=1696574759920",
      name: "moby_4_dusWQoqCFv.webp",
      title: "Messages Page",
      description: "Create chat rooms and start chatting with users and friends."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_6_TznwRZE6S.webp?updatedAt=1696574759536",
      name: "moby_6_TznwRZE6S.webp",
      title: "Create page",
      description: "Create and Publish your own posts."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_5_m3wyvf48_f.webp?updatedAt=1696574759639",
      name: "moby_5_m3wyvf48_f.webp",
      title: "Private Post Notice",
      description: "A Private Post can only be interacted by a user friends with the author."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_7_OzP6pU5gUU.webp?updatedAt=1696574759921",
      name: "moby_7_OzP6pU5gUU.webp",
      title: "Search Page",
      description: "Search for users and posts."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_8_chCEO4mDBm.webp?updatedAt=1696574759931",
      name: "moby_8_chCEO4mDBm.webp",
      title: "Settings Page",
      description: "Change and update your profile information."
      }, 

    ],
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_banner_vS3t8AO5ge.png?updatedAt=1696574760048",
      name: "moby_banner_vS3t8AO5ge.png"
    },
    logo: {
      url:"https://ik.imagekit.io/q5892cimh/my-portfolio/moby/moby_logo_white_zb-aKEbfW.png?updatedAt=1696574760835",
      name: "moby_logo_white_zb-aKEbfW.png"
    },
    palette: {
      primary: "#237b72",
      secondary: "#2e779d",
    }
  },
  {
    name: "luna", 
    title: "Luna",
    briefDescription: "A beautiful browser homepage alternative that allows the user to customize the UI to their preference.",
    description: "Luna is a personalizable browser homepage inspired by the google chrome extension 'Momentum'. It features a beautiful UI that can be customized by the user through a variety of options.",
    technologies: [ "JavaScript", "React", "Redux", "Firebase", "Material-UI", "Sass/Scss"],
    type: "personal",
    images: [
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_1_rLkxMuj7cU.webp?updatedAt=1696574793573",
      name: "luna_1_rLkxMuj7cU.webp",
      title: "Main Page",
      description: "Default layout of the app. Components can be hidden or re-arranged freely."

      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_2_Rkw6SnjM-.webp?updatedAt=1696574792895",
      name: "luna_2_Rkw6SnjM-.webp",
      title: "General Settings",
      description: "Change User Information and UI preferences."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_3_dXDsnpEEe.webp?updatedAt=1696574793002",
      name: "luna_3_dXDsnpEEe.webp",
      title: "Editor Mode",
      description: "Enter this mode to rearrange components."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_4_EaDn812Ysc.webp?updatedAt=1696574793560",
      name: "luna_4_EaDn812Ysc.webp",
      title: "Background Selection",
      description: "Select from preset backgrounds or fetch random backgrounds from unsplash.com"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_5_pZm8IMaxi.webp?updatedAt=1696574792871",
      name: "luna_5_pZm8IMaxi.webp",
      title: "Background Adjustments",
      description: "Adjust the background's brightness, contrast, and saturation."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_6_t1uL7QN7s0.webp?updatedAt=1696574793126",
      name: "luna_6_t1uL7QN7s0.webp",
      title: "Component Configurations",
      description: "Enable/disable the component and modify each component's appearance."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_7_jPPf55b9qa.webp?updatedAt=1696574793073",
      name: "luna_7_jPPf55b9qa.webp",
      title: "Interface Configurations",
      description: "Modify the base UI's appearance."
      }, 
    ],    
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/luna/luna_banner_SCBTb3cBN.png?updatedAt=1696574792612",
      name: "luna_banner_SCBTb3cBN.png"
    },
    features: [
      "Interactive and Customizable UI",
      "Display's accurate weather information (if enabled) with Openweathermap api",
      "Generates motivational quotes with Quotable API by Luke Peavey",
      "Fetches beautiful backgrounds on random or default (unsplash api)",
      "Adjust and modify background filter settings",
      "Customize each UI components",
      "Configurations are saved on local storage",
    ],
    url: "http://luna.paolobugarin.dev",
    githubUrl: "https://github.com/Paolo876/luna2.0",
    logo: {
      url:"https://ik.imagekit.io/q5892cimh/my-portfolio/luna/logo_epmTMXFbK.png?updatedAt=1696574792593",
      name: "logo_epmTMXFbK.png"
    },
    palette: {
      primary: "#050505",
      secondary: "#454ea1",
    }
  },
  {
    name: "mernshop", 
    title: "MernShop",
    briefDescription: "A mockup e-commerce web application with authentication and validation features.",
    description: "MernShop is an e-commerce web application mockup inspired by TraversyMedia's ReactJS Udemy Course. It showcases the system and functionalities of an e-commerce application with extra security and validation features.",
    technologies: [ "JavaScript", "React", "Redux", "NodeJs", "ExpressJs", "MongoDB", "Bootstrap"],
    type: "personal",
    images: [
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_1_sH9mYWjb5.webp?updatedAt=1696574819432",
      name: "mern_1_sH9mYWjb5.webp",
      title: "Home Page",
      description: "The home page shows a carousel of featured products on the header and the list of latest products for sale",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_2_QitbTo0wf9.webp?updatedAt=1696574819761",
      name: "mern_2_QitbTo0wf9.webp",
      title: "Product Page",
      description: "The page showcasing the product with all its description, images, features, and reviews",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_3_0eJ4t6Uam5.webp?updatedAt=1696574819695",
      name: "mern_3_0eJ4t6Uam5.webp",
      title: "Product Options",
      description: "Some products may have its own different variants and is all separated with an option selector",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_4_oC4strudI-.webp?updatedAt=1696574819722",
      name: "mern_4_oC4strudI-.webp",
      title: "Sign In Page",
      description: "Signing in also uses Google Login Api for faster sign in action",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_5_hC71x-BT4.webp?updatedAt=1696574822107",
      name: "mern_5_hC71x-BT4.webp",
      title: "Register Page",
      description: "Creating an account also works using Google Api to autofill your information and faster process",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_6_tlOtXmNhI.webp?updatedAt=1696574821820",
      name: "mern_6_tlOtXmNhI.webp",
      title: "Cart Page",
      description: "Shows the products the user added to cart along with an estimated total",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_8_8l6YW-BGwL.webp?updatedAt=1696574822195",
      name: "mern_8_8l6YW-BGwL.webp",
      title: "Shipping Page",
      description: "Shipping Page initially shows saved addresses for faster checkout process",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_7_uLX8mCRDN.webp?updatedAt=1696574821711",
      name: "mern_7_uLX8mCRDN.webp",
      title: "Shipping Validation Form",
      description: "For new shipping informations, a new address form is validated with Usps Api for confirmation",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_9_To--_FfO34.webp?updatedAt=1696574821821",
      name: "mern_9_To--_FfO34.webp",
      title: "Place Order Page",
      description: "Shows the total amount of items with taxes and shipping costs. Uses Paypal Api for payment options",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_10_h6dvJdEw5p.webp?updatedAt=1696574819662",
      name: "mern_10_h6dvJdEw5p.webp",
      title: "Order Confirmation Page",
      description: "Upon payment confirmation/success, an order id is generated along with the information about the order",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_11_owzJsYs2h.webp?updatedAt=1696574819196",
      name: "mern_11_owzJsYs2h.webp",
      title: "Users List Page [ADMIN]",
      description: "Shows a list of users within the app. Admin has the power to appoint a user as admin and to delete a user.",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_12_rKkAWzTu-5.webp?updatedAt=1696574819693",
      name: "mern_12_rKkAWzTu-5.webp",
      title: "Products List Page [ADMIN]",
      description: "Shows a list of all the products being sold and actions to edit or delete the product.",
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mern_13_aPiMoaMOL1.webp?updatedAt=1696574819694",
      name: "mern_13_aPiMoaMOL1.webp",
      title: "Orders List Page [ADMIN]",
      description: "Shows the list of orders and actions to change the status of the orders.",
      }, 
    ],
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mernshop_banner_esAUad0sIo.png?updatedAt=1696574819869",
      name: "mernshop_banner_esAUad0sIo.png"
    },
    logo:{
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/mernshop/mernshop_logo(1)_diRTxYHDK.png?updatedAt=1696810005775",
      name: "mernshop_logo(1)_diRTxYHDK.png"
    },
    features: [
      "Created using the MERN stack with redux state management.",
      "Implements account authentication/validation using Google API (Oauth2.0)",
      "Allows account creation or sign in with Google Login Api",
      "Validates entered address using USPS Address Validation API",
      "Checkout and pay with debit/credit card securely through PayPal API",
      "Included Admin feature for adding/editing products, viewing list of users, and managing list of orders.",
      "Mobile Responsive UI",

    ],
    url: "https://mernshop.paolobugarin.dev/",
    githubUrl: "https://github.com/Paolo876/mern-ecommerce-traversy",
    palette: {
      secondary: "#93C54B",
      primary: "#3E3F3A",
    }
  },
  {
    name: "markandgaea", 
    title: "Mark & Gaea Wedding",
    briefDescription: "A wedding RSVP website with an admin page to manage guests.",
    description: "This is a commissioned project that I designed and developed for a wedding's RSVP back in December 2023. It features on-scroll animations and a minimalist design. Submitted forms are stored on a database and an admin page is included for the client to manage their guests.",
    technologies: [ "JavaScript", "React", "Redux", "Firebase", "Material-UI", "Sass/Scss"],
    type: "commissioned",
    images: [
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_1_cqK8BqFQp.webp?updatedAt=1705465698030",
      name: "mandg_1_cqK8BqFQp.webp",
      title: "Home Page [Landing]",
      description: "Shows the main navigation and welcome image banner"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_2_nwuj6adYbH.webp?updatedAt=1705465699040",
      name: "mandg_2_nwuj6adYbH.webp",
      title: "Home Page [Details]",
      description: "Shows details, date, and time of the wedding"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_3_OgFTDkXNX.webp?updatedAt=1705465698508",
      name: "mandg_3_OgFTDkXNX.webp",
      title: "Home Page [Details]",
      description: "Shows dress code required for the wedding"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_4_rW6N3vebIg.webp?updatedAt=1705465699045",
      name: "mandg_4_rW6N3vebIg.webp",
      title: "Home Page [Map]",
      description: "The address and map of the wedding venue. A button to navigate to the venue is included"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_5_s2l8OVGy_D.webp?updatedAt=1705465698156",
      name: "mandg_5_s2l8OVGy_D.webp",
      title: "Home Page [RSVP Form]",
      description: "The form to be submitted by the invited guest to confirm their RSVP."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_6_sMgid1Q7F6.webp?updatedAt=1705465698966",
      name: "mandg_6_sMgid1Q7F6.webp",
      title: "Home Page [RSVP Submission]",
      description: "The notification that shows when submission was successful."
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_7_jK_jb-oqu6.webp?updatedAt=1705465699063",
      name: "mandg_7_jK_jb-oqu6.webp",
      title: "Admin Page [Login]",
      description: "The login page for admin. The client is created an account and can be logged in through their gmail"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/mandg_8_Q5geRHzqG.webp?updatedAt=1705465698828",
      name: "mandg_8_Q5geRHzqG.webp",
      title: "Admin Page [Guests List]",
      description: "The list of guests that submitted their RSVP is listed and can be managed, edited, or deleted by the admin."
      }, 
    ], 
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/markandgaea_banner_L6vlF6oFS.png?updatedAt=1705466012798",
      name: "markandgaea_banner_L6vlF6oFS.png",
    },
    features: [
      "animate-on-screen animations applied on components",
      "Image optimization using Imagekit.io api",
      "Submitted RSVP forms are stored on database",
      "Authorized admins can login through their gmail (Oauth2.0)",
      "Mobile Responsive UI",

    ],
    url: "https://markandgaea.web.app/",
    githubUrl: "https://github.com/Paolo876/mark-and-gaea",
    logo: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/logo_wbaCh4Lwz.png?updatedAt=1705465836928",
      name: "logo_wbaCh4Lwz.png"
    },
    palette: {
      primary: "#f1e9e7",
      secondary: "#455e58",     
    },
    isLightMode: true,
    secondaryLogo: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/markandgaea/logo_wsUsTn9x1.png?updatedAt=1705995883961",
      name: "logo_wsUsTn9x1.png",
    }

  },
  {
    name: "downtownsuitsdirect", 
    title: "Downtown Suits Direct",
    briefDescription: "A website for a men's suit and tailor shop located in Pico Rivera, California.",
    description: "Downtown Suits Direct is a men's suit and tailor shop located in Pico Rivera, California. It is an ongoing commissioned project that I am still currently designing and developing.",
    technologies: [ "JavaScript", "React","Firebase", "Material-UI", "Sass/Scss"],
    type: "commissioned",
    images: [
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_1_NReV9xPSG.webp?updatedAt=1696574840863",
      name: "dsd_1_NReV9xPSG.webp",
      title: "Home Page [Landing]",
      description: "Shows contact information, store address, and store hours"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_2_C7YO23QRGb.webp?updatedAt=1696574841699",
      name: "dsd_2_C7YO23QRGb.webp",
      title: "Home Page [Gallery]",
      description: "Shows gallery images and click redirects to gallery page"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_3_H-yV9jBiq.webp?updatedAt=1696574841255",
      name: "dsd_3_H-yV9jBiq.webp",
      title: "Home Page [Yelp Reviews]",
      description: "Lists client testimonies using Yelp Api"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_4_6oq8k35kOG.webp?updatedAt=1696574840744",
      name: "dsd_4_6oq8k35kOG.webp",
      title: "Gallery Page",
      description: "Shows a list of store images"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_5_eXZUhIiK5u.webp?updatedAt=1696574841104",
      name: "dsd_5_eXZUhIiK5u.webp",
      title: "Contact Page",
      description: "Shows contact informations and an Inquiry form that submits directly to owner's email"
      }, 
    ], 
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_banner_KnjX9wWbKf.png?updatedAt=1696574841100",
      name: "dsd_banner_KnjX9wWbKf.png",
    },
    features: [
      "animate-on-screen animations applied on components",
      "Implemented Yelp api to display customer reviews and feedbacks",
      "Image optimization using Imagekit.io api",
      "Inquiry form forwards data to client's email using EmailJS api",
      "Mobile Responsive UI",

    ],
    url: "https://downtownsuitsdirectla.web.app/",
    githubUrl: "https://github.com/Paolo876/downtownsuitsdirect",
    logo: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/dsd/dsd_logo_N3TpgC4kC.png?updatedAt=1696574840537",
      name: "dsd_logo_N3TpgC4kC.png"
    },
    palette: {
      primary: "#1c1c1c",
      secondary: "#ededed",
    }

  },
  {
    name: "carlportfolio", 
    title: "Carl Adriant Portfolio",
    briefDescription: "A web portfolio of an architect based in Doha, Qatar",
    description: "A web portfolio of an architect based in Doha, Qatar that I designed and developed. This includes an admin page for the owner using firebase authentication that only authorizes content editing through his email logged in on admin page.",
    technologies: [ "JavaScript", "React", "Firebase", "Material-UI", "Sass/Scss"],
    type: "commissioned",
    images: [
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_1_HQL2DQrue.webp?updatedAt=1696574859837",
      name: "carl_1_HQL2DQrue.webp",
      title: "Home Page [Landing]",
      description: "A minimalist landing page that shows the web navigations and the social link buttons of the client"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_2_KF3xx2LLe.webp?updatedAt=1696574860443",
      name: "carl_2_KF3xx2LLe.webp",
      title: "Home Page [About]",
      description: "A brief description of the client with buttons redirecting to the about page and contact page"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_3_fHmmrKvxLs.webp?updatedAt=1696574860452",
      name: "carl_3_fHmmrKvxLs.webp",
      title: "Projects Page",
      description: "Shows a list of projects of the client including the softwares and technologies he used"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_4_V22zxdpHHU.webp?updatedAt=1696574860154",
      name: "carl_4_V22zxdpHHU.webp",
      title: "About Page",
      description: "Shows the whole description and information of the client"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_5_7-WWgtHhd.webp?updatedAt=1696574859882",
      name: "carl_5_7-WWgtHhd.webp",
      title: "Contact Page",
      description: "Shows contact informations and an Inquiry form that submits directly to owner's email"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_6_eEMLktmXx.webp?updatedAt=1696816280678",
      name: "carl_6_eEMLktmXx.webp",
      title: "Login Page [Admin]",
      description: "Allows the client to login with his email to edit/update his projects, about page contents, and contact informations"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_7_4-gchFjXuj.webp?updatedAt=1696816280984",
      name: "carl_7_4-gchFjXuj.webp",
      title: "New Project Page [Admin]",
      description: "Allows the client to create a new project album and upload images"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_8_elf_K3XLXi.webp?updatedAt=1696816280792",
      name: "carl_8_elf_K3XLXi.webp",
      title: "Manage Projects Page [Admin]",
      description: "Allows the client to edit, upload more images, delete images, and delete a project album"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_9_Kh5Ie-qcY.webp?updatedAt=1696816280977",
      name: "carl_9_Kh5Ie-qcY.webp",
      title: "Projects Reorder Modal [Admin]",
      description: "Allows the client to reorder his projects by click and drag"
      }, 
      {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_10_5MlqRo8SCA.webp?updatedAt=1696816281036",
      name: "carl_10_5MlqRo8SCA.webp",
      title: "Update Resume Page [Admin]",
      description: "Allows the client to update his resume and other informations"
      }, 
    ],    
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/carl_banner_swt7NBvqiF.png?updatedAt=1696574860030",
      name: "carl_banner_swt7NBvqiF.png"
    },
    features: [
      "animate-on-screen animations applied on components",
      "Image optimization using Imagekit.io api",
      "Inquiry form forwards data to client's email using EmailJS api",
      "Admin powers to add/edit/update/delete content (only allowed through owner's email logged in)"
    ],
    url: "https://carl-dimabuyu.web.app/",
    githubUrl: "https://github.com/Paolo876/carl_portfolio",
    logo: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/carl/ADOBO_-_signature_-_logo_-_white_zo4ZUstyF.png?updatedAt=1696810590578",
      name: "ADOBO_-_signature_-_logo_-_white_zo4ZUstyF.png"
    },
    palette: {
      primary: "rgb(3, 107, 145)",
      secondary: "#F9F6EE",
    }
  },
  {
    name: "aynportfolio", 
    title: "Ayn Nicoli Portfolio",
    briefDescription: "A web portfolio of a graphic artist/architect based in Philippines",
    description: "A simple web portfolio of a graphic artist/architect based in Philippines that I designed and developed to showcase her works.",
    technologies: [ "JavaScript", "React", "Firebase", "Material-UI", "Sass/Scss"],
    type: "commissioned",
    images: [
      {
        url: "https://ik.imagekit.io/q5892cimh/my-portfolio/ayn/ayn_1_YNLejevk0.webp?updatedAt=1696574881712",
        name: "ayn_1_YNLejevk0.webp",
        title: "Home Page [Architectural Designs]",
        description: "Shows the list of architectural design works and renders of the client"  
      },
      {
        url: "https://ik.imagekit.io/q5892cimh/my-portfolio/ayn/ayn_2_nupzigId5u.webp?updatedAt=1696574882052",
        name: "ayn_2_nupzigId5u.webp",
        title: "Home Page [Graphic Designs]",
        description: "Shows the list of graphic design works and renders of the client"  
      },
      {
        url: "https://ik.imagekit.io/q5892cimh/my-portfolio/ayn/ayn_4_dDH4AoDed.webp?updatedAt=1696574882000",
        name: "ayn_4_dDH4AoDed.webp",
        title: "Contact Page",
        description: "Shows contact informations and an Inquiry form that submits directly to owner's email"
      },
    ],
    coverImage: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/ayn/ayn_banner_yxWgcENhs.png?updatedAt=1696574881492",
      name: "ayn_banner_yxWgcENhs.png"
    },
    features: [
      "animate-on-screen animations applied on components",
      "Image optimization using Imagekit.io api",
      "Inquiry form forwards data to client's email using EmailJS api",
      "Admin powers to add/edit/update/delete content (only allowed through owner's email logged in)",
      "Mobile Responsive UI",

    ],
    url: "https://aynsl-portfolio.web.app/",
    githubUrl: "https://github.com/Paolo876/ayn-nicoli-portfolio",
    logo: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/ayn/ayn-logo-500-grey_a0uWdgEkE.png?updatedAt=1696828761035",
      name: "ayn-logo-500-grey_a0uWdgEkE.png"
    },
    palette: {
      secondary: "#547f5e",
      primary: "#f4f1eb",
    },
    isLightMode: true,
    secondaryLogo: {
      url: "https://ik.imagekit.io/q5892cimh/my-portfolio/ayn/ayn-logo-500_rgYrBqJRn.png?updatedAt=1696828761308",
      name: "ayn-logo-500_rgYrBqJRn.png",
    }
  },
  // {
  //   name: "cimt", 
  //   title: "C.I.M.T.",
  //   briefDescription: "A software solution to manage available resources to various emergency incidents that is occurring or may occur in PCC. (My Finals Project from my Server-side Development Class in PCC)",
  //   description: "CERT Incident Management Tool is the finals project of my Server-side Development class in Pasadena City College. This app is a software solution to manage available resources and their assignments to various emergency incidents that is occurring or may occur. It is developed using React, Node, Express, Sequelize, and MySql stack.",
  //   technologies: [ "JavaScript", "React", "Redux", "NodeJs", "ExpressJs", "MySQL", "Sequelize"],
  //   type: "school",
  //   images: [MOCK_PROJ_IMG, MOCK_PROJ_IMG, MOCK_PROJ_IMG],
  //   coverImage: MOCK_PROJ_IMG,
  //   features: [],
  //   url: "http://www.google.com",
  //   githubUrl: "http://www.google.com",
  //   logo: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-dd37c.appspot.com/o/project-images%2Fmoby_logo_white.png?alt=media&token=5d2083ea-340c-4479-be33-0938373ea91a",
  //   palette: {
  //     primary: "#237b72",
  //     secondary: "#2e779d",
  //   }
  // },
]


export default projects