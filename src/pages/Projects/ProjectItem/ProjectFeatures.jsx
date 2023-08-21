import React from 'react'
import { Grid, Box, Typography, ButtonBase } from '@mui/material'
import Image from 'mui-image'


const ProjectFeatures = ({ coverImage, features, handleImageClick }) => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography 
          variant="h4" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 18, sm: 20, md: 21, lg: 24, xl: 25}} 
          letterSpacing={{xs: .5, xl:1}}
          lineHeight={{xs:1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          Features
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container columnSpacing={{xl: 2.5}} >
          <Grid item sm={12} md={6.5} lg={6} pr={{md: 2, lg:4}}>
            {/* <Typography 
              variant="h4" 
              align="left" 
              fontWeight={300}
              fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 28}} 
              letterSpacing={{xs: .5, xl:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              Features:
            </Typography> */}
            <Box component="ul" sx={{mt: {xs: 1.5, sm: 1.75, md:4}}}>
              {features.map(item => <Box component="li" ml={2.5} pb={{xs: .1, md: .15, lg: .5, xl: 1}} key={item}>
                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: {xs: 11, sm: 12.5, md: 12.5, lg:14, xl: 15},
                    fontWeight: 300,
                    opacity: .5,
                    letterSpacing: .25,
                    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                  }}        
                >
                  {item}
                </Typography>
              </Box>)}
            </Box>
          </Grid>
          <Grid item sm={12} md={5.5} lg={6} mt={{sm: 4, md: 2}}>
            <Box 
              sx={{
                py: {lg:1.5}, 
                px: {lg: 2.5}, 
                transition: "all 200ms linear", 
                background: "rgba(0,0,0,0.75)", 
                filter: "brightness(.95) contrast(.85)", 
                overflow: "hidden", 
                "&:hover": {
                  p: 0, 
                  filter: "none"
                }, 
              }}
            >
              <ButtonBase sx={{boxShadow: 20}} onClick={() => handleImageClick(coverImage.name)}>
                <Image src={coverImage.url} duration={500}/>
              </ButtonBase>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectFeatures