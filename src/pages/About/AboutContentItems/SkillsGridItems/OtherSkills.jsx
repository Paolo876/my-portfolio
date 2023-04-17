import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'
import useRootRedux from "../../../../hooks/useRootRedux"

const OtherSkills = () => {
  const { otherSkillsList } = useRootRedux();

  return (
    <Box sx={{mb: 10}}>
      <Typography variant="h5" sx={{mixBlendMode: "difference", opacity: .8}} fontSize="1.1rem" fontWeight={700} letterSpacing={4}>Other Skills</Typography>
      <Box sx={{background: "white", height: "2px", width: "6px", mb: 4, mt: 2, ml: .5, mixBlendMode: "difference" }}></Box>
        <Grid container>
          {otherSkillsList.map(item => <Grid item key={item.name} xs={.8} align="center">
            <Paper
              sx={{
                py: 1, 
                width: "80px",
                height: "110px",
                userSelect: "none",
                opacity: .75,
              }} 
              variant="outlined"    
            >
              <Box>
                <SkillIconImageItem src={item.url} height="50px" width="50px" />
                <Typography 
                  variant="body2" 
                  sx={{
                    // mixBlendMode: "difference", 
                    fontSize: 10.5, 
                    fontWeight: 400, 
                    mt: 1,
                  }}
                  color="secondary.light"
                >{item.name}</Typography>
              </Box>
            </Paper>
          </Grid>)}
        </Grid>
    </Box>

  )
}

export default OtherSkills
