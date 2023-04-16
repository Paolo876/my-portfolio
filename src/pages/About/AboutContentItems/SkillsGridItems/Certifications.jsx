import React from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'
import useRootRedux from '../../../../hooks/useRootRedux'

const Certifications = () => {
  const { certifications } = useRootRedux();

  return (
    <Box sx={{mb: 12}}>
      <Typography variant="h5" sx={{mixBlendMode: "difference"}} fontSize="1.3rem" fontWeight={700} letterSpacing={4}>Certifications</Typography>
      <Box sx={{background: "white", height: "4px", width: "10px", mb: 4, mt: 2, ml: .5, mixBlendMode: "difference" }}></Box>
      <Grid container>
        {certifications.map(item => <Grid item key={item.name} xs={5} p={2}>
          <Button sx={{width: "100%", minHeight: 150, textAlign: "left"}} variant="outlined" color="secondary" href={item.url} target="_blank">
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
                fontSize={23}
                >{item.name}</Typography>
              <Typography variant="body1" fontWeight={200} letterSpacing={2} textTransform="none" mt={1}>{item.author}</Typography>
            </Box>

          </Button>
        </Grid>)}
      </Grid>
    </Box>
  )
}

export default Certifications