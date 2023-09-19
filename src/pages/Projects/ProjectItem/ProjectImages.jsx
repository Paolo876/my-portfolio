import React from "react";
import { Grid, Box, Typography, ButtonBase, Fade } from '@mui/material'
import Image from 'mui-image'
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer';

const ProjectImages = ({ images, handleImageClick }) => {

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50% 0px -20% 0px",
    delay: 250,
    triggerOnce: true
  });
  console.log(images)
  return (
    <Grid container columnSpacing={{sm:2, md: 3, lg: 4, xl: 4}} rowSpacing={{xs: 3, sm: 4, md: 5, lg: 10, xl: 8}} ref={ref}>
      {inView && images.map((item, index) => <Grid item xs={11} sm={6} key={item.name} mx="auto">
        <Fade appear={true} in={true} timeout={1100}  style={{ transitionDelay: `${(index * 250)}ms` }}>
          <Box 
            sx={{
              boxShadow: 5,
              transition: "all 250ms linear", 
              // background: "rgba(0,0,0,0.75)", 
              filter: "brightness(.9) contrast(.85)", 
              overflow: "hidden", 
              "&:hover": {
                p: 0, 
                filter: "none"
              },
              "&:hover .title-overlay": {
                transform: "skewX(-5deg) translateX(-60%)", 
              }
            }}
          >
            <ButtonBase onClick={() => handleImageClick(item.name)} sx={{ position: "relative", border: 1, p: .25, borderColor: "rgba(200,200,200,.1)", overflow: "hidden" }}>
              <Image src={item.url} duration={800}/>
              <Box 
                sx={{
                  position: "absolute", 
                  top:0, 
                  left: "-60%", 
                  pl: "60%", 
                  pr: 3, 
                  py: .85, 
                  height: "100%",
                  width: "100%",
                  transition: "all 250ms linear 100ms", 
                  backgroundColor: "rgba(10,10,10,.95)", 
                  transform: "skewX(-5deg)", 
                  boxShadow: 20, 
                }}
                className="title-overlay"
              >
                {/* <Box sx={{position : "absolute", height: "100%", width: 2, backgroundColor: "primary.dark", transform: "skewX(5deg)", left: 1}}></Box> */}
                <Box sx={{transform: "skewX(5deg)"}} align="left">
                  <Typography 
                    variant="body1" 
                    fontWeight={600}
                    letterSpacing={-.1}
                    sx={{
                      textShadow: "1px 1px 3px rgba(100,100,100,.5)",
                      fontSize: {xs: 18},
                    }}
                    >{item.title}</Typography>
                  <Typography 
                    variant="body2" 
                    fontWeight={300}
                    // letterSpacing={.25}
                    sx={{
                      mt: 1.5,
                      textShadow: "1px 1px 3px rgba(100,100,100,.35)",
                      fontSize: {xs: 12.5, lg: 12},
                      borderLeft: 2,
                      pl: .5,
                      borderColor: "primary.dark",
                      lineHeight: 1.25,
                    }}
                    >{item.description}</Typography>
                </Box>
              </Box>
            </ButtonBase>
          </Box>
        </Fade>
      </Grid>)}
    </Grid>
  )
}

export default ProjectImages