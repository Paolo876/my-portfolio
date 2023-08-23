import { Box, Typography, Grid } from '@mui/material'

const Introduction = () => {

  return (
    <Grid container sx={{pr: {md: 0, lg: 0, xl: 0}, }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 45, sm: 60, md: 70, lg: 73, xl: 75}} 
          letterSpacing={{xs: .5, lg:1}}
          lineHeight={{xs:1.1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          My <Box component="br" sx={{display: {xs: "none"}}}></Box>Projects
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7.25} md={7.5} lg={9} xl={10.5} mt={{xs: 3.5, sm: 6, md:9, lg: 8}} ml={{sm:.25, md: .25}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 10, sm: 13, md: 14, lg:14, xl: 15.5},
            fontWeight: 300,
            opacity: .5,
            letterSpacing: .4,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            // borderLeft: 2,
            // borderColor: "primary.main",
            // pl: {xs: .75, sm: 1, lg: 1},
            ml: .15,
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