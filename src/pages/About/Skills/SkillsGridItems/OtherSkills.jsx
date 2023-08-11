import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'
import useRootRedux from "../../../../hooks/useRootRedux"

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
    transform: "scale(1.075)",
  },
  "&:hover p, &.active p": {
    color: "primary.main",
    opacity:1,
    letterSpacing: 1.1,
    fontWeight: 600, 
    textShadow: "1px 1px 3px rgba(100,100,100,.5)",
  }
}


const OtherSkills = () => {
  const { otherSkillsList } = useRootRedux();

  return (
    <Box sx={{mb: { xs: 3, sm: 8, md: 8, lg: 12, xl: 12}}}>
      <Grid container>
        <Grid item xs={12} sm={4.5} md={2} lg={2.8} xl={3.9}>
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
            {/* <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mt: {xs: 1, md:1, lg: 1.5}, ml: .5, mixBlendMode: "difference", opacity: .35}}></Box> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={7.5} md={9.5}  lg={8} xl={8}>
          <Grid container sx={{justifyContent: {xs:"right", lg: "initial"}}} >
            {otherSkillsList.map(item => <Grid item key={item.name} xs={2.4} sm={2.7} md={1.5} lg={1.5} xl={1.4}  align="center">
              <Box
                sx={{
                  my: {xs: 1.15, md:1.75}, 
                  userSelect: "none",
                }} 
              >
                <Box sx={boxStyles}>
                  <Box height={{xs: 25, sm: 40, md:45, lg:50, xl: 50}} width="auto">
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
                        mixBlendMode: "difference", 
                        opacity: .6,
                        fontSize: 10, 
                        fontWeight: 200, 
                        mt: {xs:1, md: 1.5, lg: 1.75},
                        textTransform: "uppercase",
                        letterSpacing: { sm: .2, md: 0.5, lg: 2 },
                      }}
                    >{item.name}</Typography>
                </Box>
              </Box>
            </Grid>)}
          </Grid>
        </Grid>
      </Grid>
    </Box>

  )
}

export default OtherSkills
