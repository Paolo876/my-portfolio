import { Box, Typography, Grid } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'

const Introduction = () => {

  return (
    <Grid container sx={{pl: {md: 4, lg: 0}, pr: {md: 4, lg: 0, xl: 0}}}>
      <Grid item xs={12} sm={4.5} md={4} lg={12} xl={8.5}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 55, xl: 65}} 
          letterSpacing={{xs: .5, lg:1}}
          lineHeight={{xs:1.1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          My <Box component="br" sx={{display: {xs: "none", md: "initial"}}}></Box>Projects
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6.5} md={7} lg={9} xl={8.5} mt={{xs: 1.25, sm: 1.25, md:3, lg: 6}} ml={{sm:.25, md: .25}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 11.5, sm: 14.5, md: 15, lg:14, xl: 15},
            fontWeight: 300,
            opacity: .5,
            letterSpacing: .4,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
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