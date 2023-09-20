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

  return (
    <Grid container columnSpacing={{sm:2, md: 3, lg: 4, xl: 4}} rowSpacing={{xs: 6, sm: 7, md: 8, lg: 10, xl: 12}} ref={ref}>
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
                opacity: 0
              }
            }}
          >
            <ButtonBase onClick={() => handleImageClick(item.name)} sx={{ position: "relative", border: 1, p: .25, borderColor: "rgba(200,200,200,.1)", overflow: "hidden" }}>
              <Image src={item.url} duration={800}/>
              <Box 
                sx={{
                  position: "absolute", 
                  top:0, 
                  left: {xs: "0%", lg: "-60%", xl:"-63%"}, 
                  pl: {xs: 1, lg: "60%", xl: "63%"}, 
                  pr: 2, 
                  py: {xs: .65, lg: 2, xl: 2.5}, 
                  height: {xs: "fit-content", lg: "100%"},
                  width: {xs: "fit-content", lg: "100%"},
                  transition: "all 300ms linear 150ms", 
                  backgroundColor: "rgba(8,8,8,.95)", 
                  transform: {xs: "skewX(-7deg)", lg:"skewX(-5deg)"}, 
                  boxShadow: 20, 
                }}
                className="title-overlay"
              >
                <Box sx={{transform: {xs: "skewX(7deg)", lg:"skewX(5deg)"}}} align="left">
                  <Typography 
                    variant="body1" 
                    fontWeight={600}
                    letterSpacing={.1}
                    sx={{
                      textShadow: "1px 1px 3px rgba(100,100,100,.5)",
                      fontSize: {xs: 13, sm: 15, md: 16, lg: 17, xl: 19},
                    }}
                    >{item.title}</Typography>
                  <Box sx={{height: "1px", width: "100%", backgroundColor: "primary.dark", transform: "translateX(-35%)", mt: {xs: .35, lg:.75}, opacity: .6}}></Box>
                  <Typography 
                    variant="body2" 
                    fontWeight={300}
                    sx={{
                      mt: 2,
                      textShadow: "1px 1px 3px rgba(100,100,100,.35)",
                      fontSize: {xs: 12.5, lg: 11.5, xl: 12},
                      // borderLeft: 1,
                      // pl: .5,
                      // borderColor: "primary.dark",
                      lineHeight: 1.3,
                      opacity: .65,
                      display: {xs: "none", lg: "inline-block"}
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