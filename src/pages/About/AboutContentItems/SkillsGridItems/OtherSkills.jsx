import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'
import useRootRedux from "../../../../hooks/useRootRedux"

const OtherSkills = () => {
  const { otherSkillsList } = useRootRedux();

  return (
    <Box sx={{mb: { xl: 12}}}>
      <Grid container>
        <Grid item xs={2.5} xl={2.75}>
          <Box mb={3} mt={1}>
            <Typography 
              variant="h4" 
              fontSize={{xs:18, sm: 19, md: 20, lg: 21, xl: 22}} 
              letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:2.5}} 
              lineHeight={{lg:1.6, xl:1.2}} 
              color="primary.main">Other Skills</Typography>
            <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", mt: {xs: 1, md:1, lg: 1.5}, ml: .5, mixBlendMode: "difference", opacity: .35}}></Box>
          </Box>
        </Grid>
        <Grid item xs={9.5} xl={9.25} pl={15}>
          <Grid container>
            {otherSkillsList.map(item => <Grid item key={item.name} xs={1.5} xl={1.6} align="center">
              <Box
                sx={{
                  py: 1.5, 
                  width: "80px",
                  height: "110px",
                  userSelect: "none",
                  opacity: .75,
                }} 
              >
                <Box>
                  <Box height={{xs: 40, sm: 45, md:50, lg:55, xl: 60}} width={{xs: 40, sm: 45, md:50, lg:55, xl: 60}}>
                    <SkillIconImageItem 
                      src={item.url} 
                      duration={800} 
                      objectFit='scale-down'
                      />
                  </Box>                  
                  <Typography 
                      variant="body2" 
                      sx={{
                        mixBlendMode: "difference", 
                        opacity: .4,
                        fontSize: 11, 
                        fontWeight: 300, 
                        mt: 1.5,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
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
