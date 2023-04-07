import React from 'react'
import useProjectsRedux from '../../hooks/useProjectsRedux';
import { Typography, List, ListItem, ListItemText, ListItemButton  } from '@mui/material'


const ProjectNavigation = ({ projects }) => {
  const { currentInView } = useProjectsRedux();
  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView( { behavior: 'instant', block: 'center' } );
  };

  return (
    <List dense>
      {projects.map(item => <ListItemButton key={item.name} sx={{mb:.5, px: .5, background: currentInView === item.name ? "rgba(100,100,100,.15)" : "initial"}} onClick={() => handleClick(`#${item.name}`)}>
        <ListItemText 
          primaryTypographyProps={{
            variant: "body1", 
            fontSize: 13.5, 
            fontWeight: currentInView === item.name ? 400 : 300, 
            letterSpacing: .15,
            color: "secondary",
          }}
          sx={{
            opacity: currentInView === item.name ? 1 : .95,
          }}
          >{item.title}
        </ListItemText>
      </ListItemButton>)}
    </List>
  )
}

export default ProjectNavigation