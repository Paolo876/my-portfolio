import React from 'react'
import { Typography, Box, Grid, Fade } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'
import useRootRedux from "../../../../hooks/useRootRedux"
import { useInView } from 'react-intersection-observer';

const boxStyles = {
  width: "fit-content",
  py: {sm: .75, md: .75, lg: 1, xl:1},
  height: "100%",
  userSelect: "none",
  opacity: .75,  
  background: "none",
  transition: "all 250ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover, &.active":{
    opacity:1,
    transform: "scale(1.025)",
  },
  "&:hover p, &.active p": {
    color: "primary.main",
    opacity:1,
    letterSpacing: {xs: .75, sm: 1.1},
    fontWeight: 600, 
    textShadow: "1px 1px 3px rgba(100,100,100,.5)",
  }
}


const OtherSkills = () => {
  const { otherSkillsList } = useRootRedux();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -20% 0px",
    delay: 400,
    triggerOnce: true
  });


  return (
    <Box sx={{mb: { xs: 3, sm: 8, md: 8, lg: 12, xl: 12}}}>
      <Grid container ref={ref}>
        <Grid item xs={12} sm={3} md={3.9} lg={2.8} xl={3.9}>
          <Fade appear={inView} in={inView} timeout={500}  style={{ transitionDelay: "100ms" }}>
            <Box mb={{xs: 1.5, sm:3}} mt={1}>
              <Typography 
                variant="h2" 
                align="left" 
                fontWeight={400}
                fontSize={{xs: 20, sm: 22, md: 23, lg: 24, xl: 25}} 
                letterSpacing={{xs: .5, xl:1}}
                lineHeight={{xs:1}} 
                textTransform="none"
                sx={{
                  textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                }}
              >
                Other Skills
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={9} md={8}  lg={8} xl={8}>
          <Grid container sx={{justifyContent: {xs:"right", lg: "initial"}}} >
            {otherSkillsList.map((item, index) => 
              <Fade appear={inView} in={inView} timeout={600}  style={{ transitionDelay: `${(index * 170) + 600}ms` }} key={item.name}>
                <Grid item key={item.name} xs={2.4} sm={2.5} md={2} lg={1.5} xl={1.4}  align="center">
                  <Box
                    sx={{
                      my: {xs: 1.15, md:1.75}, 
                      userSelect: "none",
                    }} 
                  >
                    <Box sx={boxStyles}>
                      <Box height={{xs: 30, sm: 35, md:38, lg:40, xl: 45}} width="auto">
                        <SkillIconImageItem 
                          src={item.url} 
                          duration={800} 
                          objectFit='scale-down'
                          sx={{filter: "invert(1) brightness(1.1)"}}
                        />
                      </Box>                  
                      <Typography 
                        variant="body2" 
                        sx={{
                          opacity: .4,
                          fontSize: {xs: 9, sm: 10, md: 11, lg: 11}, 
                          fontWeight: 300, 
                          mt: {xs: 1, sm:1.25, md: 2},
                          textTransform: "uppercase",
                          letterSpacing: {xs: .5, sm: 1},
                          transition: "all 400ms ease-in-out",
                          textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                        }}
                        >{item.name}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Fade>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>

  )
}

export default OtherSkills
