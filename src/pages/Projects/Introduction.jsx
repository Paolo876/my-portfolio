import { Box, Typography, Divider, Grid } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'

const Introduction = () => {

  return (
    <Grid container sx={{pl: {md: 4, lg: 0}, pr: {md: 4, lg: 4, xl: 0}}}>
      <Grid item xs={12} sm={4.5} md={4} lg={8} xl={8.5}>
        <Typography 
          variant="h2" 
          align="left" 
          fontWeight={400}
          fontSize={{xs: 35, sm: 45, md: 60, lg: 80, xl: 50}} 
          letterSpacing={{xs: .5, xL:1}}
          lineHeight={{xs:1}} 
          textTransform="none"
          sx={{
            textShadow: "1px 1px 7px rgba(10,10,10,.75)",
          }}
        >
          My <Box component="br" sx={{display: {xs: "none", md: "initial"}}}></Box>Projects
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6.5} md={7} lg={8} xl={8.5} mt={{xs: 1.25, sm: 1.25, md:3, lg: 3}} ml={{sm:1, md: .5}}>
        <Typography 
          variant="body1" 
          sx={{
            fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:15, xl: 14},
            fontWeight: 300,
            opacity: .55,
            letterSpacing: .3,
            textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          }}        
        >
          Listed are <Box fontWeight={400} display='inline' component="span">my published projects</Box> that I still continue to develop and improve over time. 
          <br/>Please feel free to check out the demo or git repository of my projects and message me if you have any remarks or suggestions.
        </Typography>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={12} mt={{xs: 3, sm: 3, md:4, lg:10, xl: 10}} mb={{xs: 3, md: 0}}>
        <Box sx={{width: "fit-content"}}>
          <SocialLinks 
            flexDirection='row' 
            color="inherit" 
            gap={.75}
            placement="bottom"
            additionalStyles={{
              opacity: .65,
              transition: "all 150ms ease-in-out",
              "&:hover": {
                opacity: 1,
                transform: "scale(1.15)",
                color: "primary.light",
              }
            }}
          />
        </Box>
      </Grid> */}
    </Grid>
  )
}

export default Introduction