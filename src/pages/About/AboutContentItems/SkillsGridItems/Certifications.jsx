import React from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'
import useRootRedux from '../../../../hooks/useRootRedux'

const Certifications = () => {
  const { certifications } = useRootRedux();

  return (
    <Box sx={{mb: 5}}>
      <Box mb={3}>
        <Typography 
          variant="h4" 
          fontSize={{xs:23, sm: 24, md: 25, lg: 26, xl: 28}} 
          letterSpacing={{xs:4, sm:6, md:1.5, lg:2, xl:2.5}} 
          lineHeight={{lg:1.6, xl:1.2}} 
          color="primary.main">Certifications</Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: 8, width: 8, mr: "auto", ml: .2, mt: {xs: 1.5, md:1.75}, mixBlendMode: "difference", opacity: .7}}></Box>
      </Box>
      <Grid container>
        {certifications.map(item => <Grid item key={item.name} xs={5} p={2}>
          <Button sx={{width: "100%", height: "100%", textAlign: "left", opacity: .8}} variant="outlined" color="inherit" href={item.url} target="_blank">
            <Box 
              sx={{
                p: 2, 
                width: "100%",
                height: "100%"
              }} 
              elevation={2}               
            >
              <Typography 
                variant="h6" 
                fontWeight={800} 
                letterSpacing={1} 
                textTransform="none" 
                fontSize={{xs:16, sm: 17, md: 18, lg: 19, xl: 20}} 
                >{item.name}</Typography>
              <Typography 
              variant="body1" 
              fontWeight={200} 
              fontSize={{xs:12, sm: 13, md: 14, lg: 15, xl: 15}} 

              letterSpacing={2} 
              textTransform="none" 
              mt={1}
              sx={{opacity: .8}}
              >{item.author}</Typography>
            </Box>

          </Button>
        </Grid>)}
      </Grid>
    </Box>
  )
}

export default Certifications