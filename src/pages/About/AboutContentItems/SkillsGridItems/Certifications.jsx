import React from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'
import useRootRedux from '../../../../hooks/useRootRedux'


const baseTextStyles = {
  fontSize:{xs: 12, sm: 12, md: 13, lg:14, xl: 15.5},
  fontWeight: 300,
  textAlign: "right", 
  mixBlendMode: "difference",
  opacity: .8,
}


const Certifications = () => {
  const { certifications } = useRootRedux();

  return (
    <Grid container sx={{mb: 5, pt: 5}}>
      <Grid item lg={3.5} order={{lg:2}} pl={3}>
        <Box mb={3}>
          <Typography 
            variant="h4" 
            fontSize={{xs:23, sm: 24, md: 25, lg: 26, xl: 28}} 
            letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:2.5}} 
            lineHeight={{lg:1.6, xl:1.2}} 
            align="right"
            color="primary.main">Certifications</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", ml: "auto", mt: {xs: 1, md:1, lg: 1.5}, mr: .5, mixBlendMode: "difference", opacity: .75}}></Box>
          <Typography variant="body1" sx={baseTextStyles} mt={1.5} pt={2.5}>
            Listed are some of the certificates I acquired from online courses and in college.
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={8.5} order={{lg:1}}>
        <Grid container>
          {certifications.map(item => <Grid item key={item.name} xs={4} pr={3} pb={3}>
            <Button sx={{width: "100%", height: "100%", textAlign: "left", opacity: 1}} variant="outlined" color="inherit" href={item.url} target="_blank">
              <Box 
                sx={{
                  p: 1.25, 
                  width: "100%",
                  height: "100%"
                }} 
                elevation={2}               
              >
                <Typography 
                  variant="h6" 
                  fontWeight={800} 
                  letterSpacing={1} 
                  fontSize={{xs:14, sm: 15, md: 16, lg: 17, xl: 17.5}} 
                >
                  {item.name}
                </Typography>
                <Typography 
                  variant="body1" 
                  fontWeight={200} 
                  fontSize={{xs:11, sm: 12, md: 13, lg: 14, xl: 14}} 
                  letterSpacing={2} 
                  textTransform="none" 
                  mt={1}
                  sx={{opacity: .8}}
                >
                  {item.author}
                </Typography>
              </Box>
            </Button>
          </Grid>)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Certifications