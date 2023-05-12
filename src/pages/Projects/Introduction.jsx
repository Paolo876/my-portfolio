import { Box, Typography, Divider, Grid } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'

const Introduction = () => {

  return (
    <Grid container sx={{pl: {md: 4, lg: 0}, pr: {md: 4, lg: 0}}}>
      <Grid item xs={12} sm={4.5} md={4} lg={12}>
        <Typography 
          variant="h1" 
          align="left" 
          fontWeight={800} 
          fontSize={{xs:32, sm: 32, md: 42, lg: 40, xl: 50}} 
          letterSpacing={{xs:2, sm:2, md: 2, lg: 2, xl:3.5}} 
          lineHeight={{xl:1}} 
          sx={{mixBlendMode: "difference"}}
        >
          My<br/>Projects
        </Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: {xs: 2, sm: 8, md: 10}, width: {xs: 12, sm: 8, md: 10}, mr: "auto", mt: {xs: 1.25, sm: 1.5, md:3}, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>
      </Grid>
      <Grid item xs={12} sm={6.5} md={7} lg={12} mt={{xs: 1.25, sm: 1.25, md:3}} ml={{sm:1, md: 0}}>
        <Typography 
          variant="body1" 
          fontSize={{xs: 12, sm: 12, md: 13, lg:14, xl: 15}} 
          fontWeight={200} 
          sx={{textAlign: "justify", textJustify: "inter-word", mixBlendMode: "difference"}}
        >
          Listed are <Box fontWeight={400} display='inline' component="span">my published projects</Box> that I still continue to develop and improve over time. 
          <br/>Please feel free to check out the demo or git repository of my projects and message me if you have any remarks or suggestions.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} mt={{xs: 3, sm: 3, md:4, lg:7, xl: 8}} px={{sm: 15, md:1.75, lg: 2.25, xl:3}} mb={{xs: 3, md: 0}}>
        <Divider><SocialLinks buttonSize="medium" gap={1.5} iconSize={{xs: 16, sm: 17, md: 18, lg: 20}}/></Divider>
      </Grid>
    </Grid>
  )
}

export default Introduction