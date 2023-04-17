import { useState, useEffect } from 'react'
import useRootRedux from '../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../components/SkillIconImageItem'

import { Box, Typography, Grid, Paper, ButtonBase, Button } from '@mui/material'
import RightChevron from "../../../assets/chevron-right.svg"

const boxStyles = {
  py: 2.5, 
  my: 1, 
  width: "110px",
  height: "120px",
  userSelect: "none",
  opacity: .9,  
}

const textStyles = {
  opacity: .85,
  fontSize: 12, 
  fontWeight: 500, 
  mt: 1.5,
}

const SkillsShowcase = () => {
  const { skillsList } = useRootRedux();
  const [ skills, setSkills ] = useState(null);


  useEffect(() => {
    setSkills({id: 'main', array: skillsList.filter(item => ["frontend", "backend", "styling"].includes(item.type))})
  }, [skillsList])

  
  const handleClick = () => {
    if(skills.id === "main"){
      setSkills({id: 'other', array: skillsList.filter(item => item.type === "programming")})
    } else {
      setSkills({id: 'main', array: skillsList.filter(item => ["frontend", "backend", "styling"].includes(item.type))})
    }
  }

  if(skills) return (
    <Grid container px={2} sx={{position: "relative"}} align="center">
      {skills.id !== "main" && <Grid item xs={1} sx={{my: 1.5}}>
        <ButtonBase sx={{height: "100%", transform: "rotate(180deg)"}} draggable={false} onClick={handleClick}>
          <Box sx={{opacity: .75}}>
            <SkillIconImageItem src={RightChevron} height="40px" width="40px" duration={800} objectFit='scale-down'/>
          </Box>
        </ButtonBase>
      </Grid>}
      <Grid item xs={11} px={.25}>
        <Grid container>
          {skills.array.map(item => 
            <Grid item xs={2.25} key={item.name} align="center">
              <Paper sx={boxStyles} elevation={2}>
                <Box>
                  <SkillIconImageItem src={item.url} height="50px" width="50px" duration={800} objectFit='scale-down'/>
                  <Typography variant="body2" sx={textStyles} color="secondary">{item.name}</Typography>
                </Box>
              </Paper>

            </Grid>
          )}
        </Grid>
      </Grid>
      {skills.id === "main" && <Grid item xs={1} sx={{my: 1.5}} >
        <ButtonBase sx={{height: "100%"}} draggable={false} onClick={handleClick}>
          <Box sx={{opacity: .9}} >
            <SkillIconImageItem src={RightChevron} height="40px" width="40px" duration={800} objectFit='scale-down'/>
          </Box>
        </ButtonBase>
      </Grid>}
    </Grid>
  )
}

export default SkillsShowcase