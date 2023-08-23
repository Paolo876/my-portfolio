import { Box, Typography, Grid } from '@mui/material'

const Introduction = () => {

  return (
    <Grid container sx={{pr: {md: 0, lg: 0, xl: 0}, }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 42, sm: 60, md: 75, lg: 75, xl: 82}} 
          letterSpacing={{xs: .5, }}
          lineHeight={{xs:1.1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(50,50,50,.75)",
          }}
        >
          My <Box component="br" sx={{display: {xs: "none"}}}></Box>Projects
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7.25} md={7.5} lg={9} xl={9.25} mt={{xs: 3.5, sm: 6, md:9, lg: 6}} ml={{sm:.25, md: .25}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 11.5, sm: 14.5, md: 15, lg:16, xl: 16},
            fontWeight: 300,
            opacity: .45,
            letterSpacing: .4,
            lineHeight: 1.4,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            ml: .1,
          }}        
        >
          Listed are <Box fontWeight={400} display='inline' component="span">my published projects</Box> that I still continue to develop and improve over time. 
          <br/>Please feel free to check out the web demo or git repository of my projects, and message me for any remarks or suggestions.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Introduction