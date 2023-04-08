import React from 'react'
import useProjectsRedux from '../../hooks/useProjectsRedux';
import { Box, List, ListItemText, ListItemButton } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProjectNavigation = ({ projects }) => {
  const { currentInView } = useProjectsRedux();
  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView( { behavior: 'instant', block: 'center' } );
  };

  return (
    <List dense>
      <Box sx={{height: "4px", width: "10px", my: 2}}>
        <Box sx={{background: "white", height: "100%", width: "100%"}}></Box>

      </Box>
      {projects.map(item => <ListItemButton key={item.name} sx={{mb:.5, px: .5, position: "relative"}} onClick={() => handleClick(`#${item.name}`)}>
        {currentInView === item.name && <Box sx={{border: 1, position: "absolute", top: "50%", left: -10, height: "5px", width: "5px", mixBlendMode: "difference", opacity: .5, transform: "translateY(-50%)"}}></Box>}
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