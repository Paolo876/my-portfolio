import { useEffect } from 'react'
import { Box, Typography, Divider, Grid } from '@mui/material'
import SocialLinks from '../../components/SocialLinks'
import useProjectsRedux from '../../hooks/useProjectsRedux'
import { useInView } from 'react-intersection-observer';


const Introduction = () => {
  // const { setCurrentInView, currentInView } = useProjectsRedux();
  // const { ref, inView } = useInView({
  //   threshold: 0,
  //   rootMargin: '-20% 0% -50% 0%',
  //   trackVisibility: true,
  //   delay: 600,
  // });

  // useEffect(() => {
  //   if(inView && currentInView !== null) setCurrentInView(null)
  // }, [inView])


  return (
    <Box sx={{position: "relative"}}>
      <Box>
        <Typography variant="h1" align="left" fontSize={{xs:25, sm: 28, md: 35, lg: 45, xl: 55}} letterSpacing={{xs:2, sm:3, md: 2, lg: 2.5, xl:3.5}} lineHeight={{xl:1}} color="primary.main">
          My<br/>Projects
        </Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: "10px", width: "10px", mr: "auto", mt: {xs: 1.5, md:3}, ml: .2, mixBlendMode: "difference", opacity: .7}}></Box>

      </Box>
      <Box mt={5}>
        <Typography variant="body1" fontSize={{xs: 14, sm: 15, md: 13, lg:14, xl: 15.5}} fontWeight={200} sx={{textAlign: {xs: "justify"}, textJustify: "inter-word"}} >
          Listed are <Box fontWeight={400} display='inline'>my published projects</Box> that I still continue to develop and improve over time. 
          <br/>Please feel free to check out the demo or git repository of my projects and message me if you have any remarks or suggestions.
        </Typography>
      </Box>
      <Box mt={{md:5, lg:7, xl: 8}} px={{md:1.75, lg: 2.25, xl:3}}>
        <Divider><SocialLinks buttonSize="medium" gap={1.5} iconSize={{xs: 16, sm: 17, md: 18, lg: 20}}/></Divider>
      </Box>
      
      {/* <Box                
        sx={{
          opacity: .9, 
          mixBlendMode: "difference", 
        }}
        >
        <Typography 
          variant="h1" 
          sx={{
            textTransform: "none",
            fontWeight: 800,
            fontSize: "7.25rem",
            lineHeight: .95,
          }}
          >My<br/> Projects</Typography>
      </Box>
      <Box sx={{px: 4, my: 8, mixBlendMode: "difference"}}>
        <Box sx={{background: "white", height: "4px", width: "20px", my: 2}}></Box>
        <Typography variant="body1" mb={4} fontWeight={100} fontSize={19} letterSpacing={.5} lineHeight={1.75}>
          Listed are <Box fontWeight={400} display='inline'>my published projects</Box> that I still continue to develop and improve over time. 
          Please feel free to check out the demo or git repository of my projects and message me if you have any remarks or suggestions.
        </Typography>
        <Divider flexItem><SocialLinks iconSize="small" gap={.5} buttonSize="small" flexDirection="row"/></Divider>
      </Box> */}
    </Box>
  )
}

export default Introduction