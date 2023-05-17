import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'
import useRootRedux from "../../../../hooks/useRootRedux"

const OtherSkills = () => {
  const { otherSkillsList } = useRootRedux();

  return (
    <Box sx={{mb: 4}}>
      <Typography 
        variant="h4" 
        fontSize={{xs:18, sm: 19, md: 20, lg: 21, xl: 22}} 
        letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:2.5}} 
        lineHeight={{lg:1.6, xl:1.2}} 
        color="primary.main">Other Skills</Typography>
      <Box sx={{background: "rgba(239,235,229,1)", height: 8, width: 8, mr: "auto", ml: .2, mt: {xs: 1.5, md:1.75}, mixBlendMode: "difference", opacity: .7}}></Box>
        <Grid container>
          {otherSkillsList.map(item => <Grid item key={item.name} xs={1} align="center">
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
                      opacity: .6,
                      fontSize: 12, 
                      fontWeight: 400, 
                      mt: 1.5,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                    }}
                  >{item.name}</Typography>
              </Box>
            </Box>
          </Grid>)}
        </Grid>
    </Box>

  )
}

export default OtherSkills
