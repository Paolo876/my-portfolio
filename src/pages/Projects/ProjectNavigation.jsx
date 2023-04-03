import React from 'react'
import { Typography, List, ListItem, ListItemText, ListItemButton  } from '@mui/material'


const ProjectNavigation = ({ projects }) => {
  return (
    <List dense>
      {projects.map(item => <ListItemButton key={item.name} sx={{mb:.5, px: .5}}>
        <ListItemText 
          primaryTypographyProps={{
            variant: "body1", 
            fontSize: 13.5, 
            fontWeight: 300, 
            letterSpacing: .15,
            color: "secondary",
          }}
          sx={{
            opacity: .95
          }}
          >{item.title}
        </ListItemText>
      </ListItemButton>)}
    </List>
  )
}

export default ProjectNavigation