import React from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'
import useRootRedux from '../../../../hooks/useRootRedux'


const Certifications = () => {
  const { certifications } = useRootRedux();

  return (
    <Grid container sx={{mb: { xs: 4, sm: 8, md: 8, lg: 10, xl: 15}}} >
      <Grid item xs={12} sm={12} lg={3} xl={3.5} order={{lg:2}} mt={{md: 3, lg: 0}}>
        <Box mb={{xs: 2, lg:3}}>
          <Typography 
            variant="h4" 
            fontSize={{xs:23, sm: 25, md: 25, lg: 28, xl: 29}} 
            letterSpacing={{xs:1.5, sm:1.5, md:1.5, lg:2, xl:2.5}} 
            lineHeight={{lg:1.6, xl:1.2}} 
            textAlign={{md: "center", lg: "right"}}
            color="primary.main">Certifications</Typography>
          <Box sx={{background: "rgba(239,235,229,1)", height: "2px", width: "16px", ml: {md:"auto"}, mt: {xs: 1, md:1, lg: 1.5}, mr: {xs: "auto", lg:.5}, mixBlendMode: "difference", opacity: .35}}></Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} lg={9}  xl={8.5} order={{lg:1}} pr={{md: 0, lg: 2, xl: 4}} px={{ md: 2, lg: 0}}>
        <Grid container pt={1.5} sx={{justifyContent: "center"}}>
          {certifications.map(item => <Grid item key={item.name} xs={11} sm={6} md={4} pr={{sm: .75, md: 1.5, lg: 3}} pl={{sm: .75, md: 1.5, lg: 0}} pb={{xs: 1.25, md:3}}>
            <Button sx={{width: "100%", height: "100%", textAlign: "left", opacity: 1, px: {sm: .5, md: .75}}} variant="outlined" color="inherit" href={item.url} target="_blank">
              <Box 
                sx={{
                  p: {xs: .75, md:1.25}, 
                  width: "100%",
                  height: "100%"
                }} 
                elevation={2}               
              >
                <Typography 
                  variant="h6" 
                  fontWeight={800} 
                  letterSpacing={1} 
                  fontSize={{xs:14, sm: 14, md: 14, lg: 16, xl: 17.5}} 
                  lineHeight={1.25}
                >
                  {item.name}
                </Typography>
                <Typography 
                  variant="body1" 
                  fontWeight={200} 
                  fontSize={{xs:11, sm: 11, md: 13, lg: 13, xl: 14}} 
                  letterSpacing={{sm: .5, md:1, xl:2}} 
                  textTransform="none" 
                  lineHeight={1.15}
                  mt={{xs: 1.25, md:3}}
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