import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'
import useRootRedux from "../../../../hooks/useRootRedux"

const OtherSkills = () => {
  const { otherSkillsList } = useRootRedux();

  return (
    <Box sx={{mb: { xs: 4, sm: 8, md: 8, lg: 12, xl: 12}}}>
      <Grid container>
        <Grid item xs={12} sm={4.5} md={2}>
          <Box mb={{xs: 1.5, sm:3}} mt={1}>
            <Typography 
              variant="h4" 
              fontSize={{xs:21, sm: 21, md: 21, lg: 21, xl: 22}} 
              letterSpacing={{xs:1.25, sm:1.5, md:1.5, lg:2, xl:2.5}} 
              lineHeight={{lg:1.6, xl:1.2}} 
              color="primary.main">Other Skills</Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mt: {xs: 1, md:1, lg: 1.5}, ml: .5, mixBlendMode: "difference", opacity: .35}}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7.5} md={9.5} xl={10} pl={{md: 0, lg: 11, xl: 6}}>
          <Grid container sx={{justifyContent: {xs:"right", lg: "initial"}}}>
            {otherSkillsList.map(item => <Grid item key={item.name} xs={2.5} sm={2.7} md={1.7} lg={1.4} xl={1.25} align="center">
              <Box
                sx={{
                  my: {xs: 1.15, md:1.75}, 
                  userSelect: "none",
                  opacity: .8,
                }} 
              >
                <Box>
                  <Box height={{xs: 34, sm: 42, md:45, lg:50, xl: 50}} width={{xs: 34, sm: 42, md:45, lg:50, xl: 50}}>
                    <SkillIconImageItem 
                      src={item.url} 
                      duration={800} 
                      objectFit='scale-down'
                      sx={{filter: "invert(1) brightness(2)"}}
                    />
                  </Box>                  
                  <Typography 
                      variant="body2" 
                      sx={{
                        mixBlendMode: "difference", 
                        opacity: .6,
                        fontSize: 10, 
                        fontWeight: 300, 
                        mt: {xs:1, md: 1.5, lg: 1.75},
                        textTransform: "uppercase",
                        letterSpacing: 1,
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
