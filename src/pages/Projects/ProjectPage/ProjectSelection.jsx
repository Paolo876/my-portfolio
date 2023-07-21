import React from 'react'
import { List, ListItem, ListItemButton } from '@mui/material';
const ProjectSelection = ({ projects, setActiveProject, setIsHovered, activeProject }) => {

  return (
    <List>
    {projects.map((item, index) => <ListItem key={item.name} >
      <ListItemButton 
        className={index === activeProject ? "active" : ""}
        disableRipple
        disableGutters
        onMouseOver={() => { setActiveProject(index); setIsHovered(true) }}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          width: "100%", 
          alignItems: "center", 
          display: "flex", 
          justifyContent: "center",
          textTransform: "none",
          fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 35},
          fontWeight: 300,
          textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          transition: "all 400ms ease",
          opacity: .55, 
          my: 1, 
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            height: 3,
            width: 0,
            backgroundColor: "primary.main",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            transition: "all 200ms ease"
          },
          "&:hover, &.active": {
            opacity: 1,
            fontWeight: 500,
            transform: "scale(1.015)",
            background: "none",
            "&::before": {
              width: 40,
              backgroundColor: "primary.main",
            }
          }
          }}>
        {item.title}
      </ListItemButton>
    </ListItem>)}
  </List>
)
}

export default ProjectSelection