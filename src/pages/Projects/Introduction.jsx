import { Box, Typography, Grid, Fade } from '@mui/material'

const Introduction = () => {

  return (
    <Grid container sx={{pr: {md: 0, lg: 0, xl: 0}, }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Fade appear={true} in={true} timeout={800}  style={{ transitionDelay: "250ms" }}>
          <Box>
            <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 42, sm: 60, md: 68, lg: 70, xl: 80}} 
              letterSpacing={.5}
              lineHeight={{xs:1.1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(50,50,50,.75)",
              }}
            >
              My <Box component="br" sx={{display: {xs: "none"}}}></Box>Projects
            </Typography>
          </Box>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={7.25} md={7.25} lg={11} xl={9.25} mt={{xs: 3.5, sm: 4, md:5, lg: 5, xl: 7}} ml={{sm:.25, md: .25}}>
        <Fade appear={true} in={true} timeout={1000}  style={{ transitionDelay: "500ms" }}>
          <Box>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: {xs: 10, sm: 12.5, md: 13.5, lg:14, xl: 14.5},
                fontWeight: 300,
                opacity: .45,
                letterSpacing: .25,
                lineHeight: 1.4,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                ml: .1,
              }}        
            >
              Listed are <Box fontWeight={400} display='inline' component="span">my published projects</Box> that I still continue to develop and improve over time. 
              Please feel free to check out the web demo or git repository of my projects, and message me for any remarks or suggestions.
            </Typography>
          </Box>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default Introduction