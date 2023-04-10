import React from 'react'
import { Box, List, ListItemText, ListItemButton  } from '@mui/material'

const MOCK_OPTIONS = [
  {name: "summary", title: "Summary"},
  {name: "skills", title: "Skills and Experience"},
  {name: "education", title: "Education"},
  {name: "background", title: "Background"},
]
const AboutNavigation = () => {
  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView( { behavior: 'instant', block: 'center' } );
  };

  return (
    <List dense>
      <Box sx={{height: "4px", width: "10px", my: 2}}>
        <Box sx={{background: "white", height: "100%", width: "100%"}}></Box>
      </Box>
      {MOCK_OPTIONS.map(item => <ListItemButton key={item.name} sx={{mb:.5, pl: 1, pr: 3, position: "relative"}} onClick={() => handleClick(`#${item.name}`)}>
        <ListItemText 
          primaryTypographyProps={{
            variant: "body1", 
            fontSize: 13.5, 
            fontWeight: 300, 
            letterSpacing: .5,
            color: "secondary",
          }}
          sx={{
            opacity: 1,
          }}
          >{item.title}
        </ListItemText>
      </ListItemButton>)}
    </List>
  )
}

export default AboutNavigation