import React from 'react'
import { Grid, Box, Typography, Tooltip, IconButton } from '@mui/material'
import Image from 'mui-image'


const ProjectFeatures = ({ coverImage, features }) => {


  return (
    <Grid container>
      {/* <Grid item xs={12}>
        <Typography 
          variant="h4" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 25}} 
          letterSpacing={{xs: .5, xL:1}}
          lineHeight={{xs:1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          Features
        </Typography>
      </Grid> */}

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6} pr={5}>
            <Typography 
              variant="h4" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 35, sm: 45, md: 60, lg: 65, xl: 25}} 
              letterSpacing={{xs: .5, xL:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              Features
            </Typography>
            <Box component="ul" sx={{mt: 3}}>
              {features.map(item => <Box component="li" ml={2.5} pb={1}>
                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:15, xl: 15},
                    fontWeight: 300,
                    opacity: .55,
                    letterSpacing: .25,
                    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                  }}        
                >
                  {item}
                </Typography>
              </Box>)}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{py: 1.5, px: 2.5, transition: "all 250ms linear", background: "rgba(0,0,0,0.75)", filter: "brightness(.95) contrast(.85)", "&:hover": {p: 0, filter: "none"}, overflow: "hidden", }}>
              <Box sx={{boxShadow: 20}}>
                <Image src={coverImage.url}/>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectFeatures