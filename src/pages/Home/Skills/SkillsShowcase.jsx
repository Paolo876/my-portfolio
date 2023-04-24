import { useState, useEffect } from 'react'
import useRootRedux from '../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../components/SkillIconImageItem'

import { Box, Typography, Grid, Paper, ButtonBase, Button } from '@mui/material'
import RightChevron from "../../../assets/chevron-right.svg"

const boxStyles = {
  py: {xs: 1.5, md:2.5}, 
  my: {xs: .5, md:1}, 
  width: "100%",
  height: { md:"110px", lg:"120px"},
  userSelect: "none",
  opacity: .9,  
  background: "rgba(60,60,60,0.1)"
}

const textStyles = {
  opacity: .85,
  fontSize: {xs: 10, sm: 10, md:11, lg: 12}, 
  fontWeight: 500, 
  mt: 1.5,
  // display: {xs: "none", sm: "initial"}
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
    <Grid container px={{ xs:0, lg:2}} sx={{position: "relative"}} align="center" justifyContent="space-between">
      {skills.id !== "main" && <Grid item xs={1.2} sm={1} sx={{my: 1.5}}>
        <ButtonBase sx={{height: "100%", transform: "rotate(180deg)"}} draggable={false} onClick={handleClick}>
          <Box sx={{opacity: .75}} height="40px" width="40px" >
            <SkillIconImageItem src={RightChevron}duration={800} objectFit='scale-down'/>
          </Box>
        </ButtonBase>
      </Grid>}
      <Grid item xs={10.5} sm={11}>
        <Grid container spacing={{ xs: 1.5, md:.5, lg:1.5, xl:1.75}}>
          {skills.array.map(item => 
            <Grid item xs={2.8} sm={2.25} key={item.name} align="center">
              <Paper sx={boxStyles} elevation={5} variant="elevation">
                <Box height={{xs: "25px", sm: "35px", md:"37px", lg:"45px"}} width={{xs: "25px", sm: "35px", md:"37px", lg:"45px"}}>
                  <SkillIconImageItem src={item.url} duration={800} objectFit='scale-down'/>
                </Box>
                <Typography variant="body2" sx={textStyles} color="secondary">{item.name}</Typography>

              </Paper>

            </Grid>
          )}
        </Grid>
      </Grid>
      {skills.id === "main" && <Grid item xs={1} sm={1} sx={{my: 1.5}} >
        <ButtonBase sx={{height: "100%"}} draggable={false} onClick={handleClick}>
          <Box sx={{opacity: .9}} height="40px" width="40px">
            <SkillIconImageItem src={RightChevron}  duration={800} objectFit='scale-down'/>
          </Box>
        </ButtonBase>
      </Grid>}
    </Grid>
  )
}

export default SkillsShowcase