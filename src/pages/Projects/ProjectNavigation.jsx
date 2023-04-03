import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, List, ListItem, ListItemText, ListItemButton  } from '@mui/material'


const ProjectNavigation = ({ projects }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <List dense>
      {projects.map(item => <ListItemButton key={item.name} sx={{mb:.5, px: .5}} onClick={() => handleClick(`#${item.name}`)}>
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