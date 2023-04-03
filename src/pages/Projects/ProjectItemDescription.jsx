import React from 'react'
import { Typography, Box, Divider, Paper, Tooltip, List, ListItem } from '@mui/material'
import SkillIconImageItem from '../../components/SkillIconImageItem'
import { useAppContext } from '../../hooks/useAppContext'

const boxStyles = {
  display: "flex", 
  flexDirection: "row", 
  alignItems: "center", 
  justifyContent: "center",
  p: 1.1,
  userSelect: "none",
  borderRadius: "50%",
  position: "relative",
  overflow: "hidden"
}


const ProjectItemDescription = ({ title, description, technologies, features }) => {
  const { skillsList } = useAppContext();

  return (
    <>
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 800,
          mixBlendMode: "difference",
          textTransform: "none",
          letterSpacing: .5,
          lineHeight: 1
        }}
      >{title}</Typography>
      <Divider/>
      <Box sx={{px: .5}}>
        <Typography 
          variant="body1" 
          sx={{
            mt: 2,
            fontWeight: 300,
            lineHeight: 1.55,
            mixBlendMode: "difference"
          }}  
        >{description}</Typography>
        <Box sx={{mt: 3}}>
        <Typography              
            variant="h6" 
            sx={{
              fontWeight: 600,
              fontSize: 18,
              mixBlendMode: "difference",
              textTransform: "none",
              letterSpacing: .5,
            }}>Features: </Typography>
            <List component="ul" sx={{listStyle: "circle", py: 0.15, px: .25}}>
              {features.map(_item => <ListItem key={_item} sx={{py: .5, px: .25, ml: 2.75, display: 'list-item', mixBlendMode:"difference", fontSize: 15, fontWeight: 200}}>{_item}</ListItem>)}
            </List>
        </Box>
        <Box sx={{mt: 3}}>
          <Typography              
            variant="h6" 
            sx={{
              fontWeight: 600,
              fontSize: 18,
              mixBlendMode: "difference",
              textTransform: "none",
              letterSpacing: .5,
            }}>Main Technologies: </Typography>
            <Box sx={{display: "flex", flexDirection: "row", gap: 1.5, px: 1, mt: 1.5}}>
              {technologies.map(item => {
                const tech = skillsList.find(_item => _item.name === item)
                if(tech) return <Tooltip title={<Typography variant="body2" fontWeight={300} fontSize={13} lineHeight={1.25}>{tech.name}</Typography>} arrow  key={tech.name}>
                  <Paper sx={boxStyles} variant="outlined">
                    <Box>
                      <SkillIconImageItem src={tech.url} height="25px" width="25px" duration={500} objectFit='scale-down'/>
                    </Box>
                  </Paper>
                </Tooltip>
              })}
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProjectItemDescription