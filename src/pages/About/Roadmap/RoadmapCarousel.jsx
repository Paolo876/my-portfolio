import { useState } from 'react'
import { Grid, Typography, Box, IconButton } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const roadmapItems = [
  {
    title: "I - The Beginning",
    description: "Before my development journey started, I used to study Architecture back in Philippines where I learned about effective design methods and strategies that I continue to incorporate throughout my projects. In 2019, I started an online course called The Web Development Bootcamp by Colt Steele where I learned about the fundamentals. After completing the 47-hour course, it caught my interest and gave me the motivation to enroll back to College in 2020 for a degree in Computer Information Systems Major in Software Development and Web Development."
  },
  {
    title: "II - The Challenges",
    description: "While being a part-time college student, I was also self-studying through multiple online courses and youtube tutorials, all while being full-time employed at an office job. As challenging as it was, the experience was worth it for the knowledge I gained."
  },
  {
    title: "III - The Process",
    description: "In college, I was able to learn the foundations, how to think like a developer, analyze logic and algorithms, and experienced working with a team. I focused more on Web Development than Software Development as it seems more engaging to me. I then started learning ReactJS along with related tech stack and developed most of my projects using it. In 2022, I started working as a freelance developer on the side, building commissioned projects to improve my skills and build network."
  },
  {
    title: "IV - The Present",
    description: "Present time, I still continue to learn more techologies online, further refine and improve my existing projects, and conceptualize new project ideas. I may lack enough work or professional experience but I am determined and always remain consistent with my progress hoping that one day the hard work will pay off."
  },
];

const navigatorStyles = {
  transition: "all 300ms linear",
  backgroundColor: "transparent",
  "svg": {
    transition: "all 120ms linear",
    filter: "drop-shadow(1px 1px 3px rgba(150,150,150,.15))"
  },
  "&:hover": {
    backgroundColor: "rgba(50,50,50,.25)",
    "svg": {
      transform: "scale(1.2)",
      filter: "drop-shadow(1px 1px 3px rgba(50,50,50,.2))"
      
    }
  },
  "&:active": {
    "svg": {
      transform: "scale(.95)"
    }
  }

}


const RoadmapCarousel = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const handleClick = (action) => {
    if(action === "prev" && currentIndex > 0) setCurrentIndex(prevState => prevState - 1)
    if(action === "next" && currentIndex < roadmapItems.length - 1) setCurrentIndex(prevState => prevState + 1)
  }
  return (
    <Box 
      sx={{
        mt: {xs: 4, sm: 5, md: 5, lg: 6, xl:8}, 
        display: "flex",
        flexDirection: "row",
        width: "100%"
        }}
    >
      <IconButton 
        onClick={() => handleClick("prev")} 
        disabled={currentIndex === 0} 
        color="primary" 
        sx={currentIndex !== 0 ? navigatorStyles : {}}
      >
        <ArrowBackIosNewIcon fontSize="large"/>
      </IconButton>
      <Box 
        sx={{
          width: "100%", 
          px: {sm: 3, md: 3, lg: 8, xl: 12}
        }}
      >
        <Carousel
          indicators={true}
          interval={8000}
          duration={800} 
          navButtonsAlwaysInvisible={true}
          autoPlay={false}
          onChange={(i) => setCurrentIndex(i)}
          index={currentIndex}
        >
          {roadmapItems.map(item => <Grid container key={item} sx={{minHeight: {sm: 210, md: 175, lg: 175, xl: 190}}}>
            <Grid item md={4} lg={3.5} xl={4}>
              <Typography
                variant="h2" 
                fontWeight={400}
                fontSize={{xs: 22, sm: 21, md: 23, lg: 24, xl: 25}} 
                letterSpacing={{xs: .5, xl:1}}
                lineHeight={{xs:1}} 
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                }}
              >
                {item.title}
              </Typography>
            </Grid>
            <Grid item md={8} lg={8.5} xl={8} mt={{sm: 2, md: 1}}>
              <Typography
                variant='body2'
                sx={{
                  fontSize: {xs: 12, sm: 12.5, md: 13, lg:15, xl: 16},
                  fontWeight: 300,
                  opacity: .55,
                  letterSpacing: .4,
                  lineHeight: 1.4,
                  textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                  borderLeft: 2,
                  borderColor: "primary.main",
                  pl: {xs: 1, md: 1.25, lg: 2},
                }}
              >
                {item.description}
              </Typography>
            </Grid>
          </Grid>
          )}
        </Carousel>
      </Box>
      <IconButton 
        onClick={() => handleClick("next")} 
        disabled={currentIndex === roadmapItems.length - 1} 
        color="primary"
        sx={navigatorStyles}
      >
        <ArrowForwardIosIcon fontSize="large"/>
      </IconButton>
    </Box>
  )
}

export default RoadmapCarousel