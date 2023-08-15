import React from 'react'
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton } from '@mui/material';


const ProjectSelection = ({ projects, setActiveProject, setIsHovered, activeProject }) => {
  const navigate = useNavigate();


  return (
    <List>
    {projects.map((item, index) => <ListItem key={item.name} >
      <ListItemButton 
        className={index === activeProject ? "active" : ""}
        disableRipple
        disableGutters
        onMouseOver={() => { setActiveProject(index); setIsHovered(true) }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`${item.name}`)}
        sx={{
          width: "100%", 
          alignItems: "center", 
          display: "flex", 
          justifyContent: {lg:"center"},
          textTransform: "none",
          fontSize: {xs: 12.5, sm: 24, md: 28, lg:25, xl: 30},
          fontWeight: 300,
          textShadow: "1px 1px 5px rgba(10,10,10,.75)",
          transition: "all 450ms ease",
          opacity: .4,
          letterSpacing: .5,
          my: {sm: .5, md: .75, lg: .75, xl:1}, 
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            height: 3,
            width: 0,
            backgroundColor: "primary.main",
            bottom: 0,
            left: {lg:"50%"},
            transform: {lg:"translateX(-50%)"},
            transition: "all 200ms ease"
          },
          "&:hover, &.active": {
            opacity: 1,
            fontWeight: 500,
            transform: "scale(1.015)",
            textShadow: "1px 1px 5px rgba(100,100,100,.25)",
            background: "none",
            mixBlendMode: "initial", 
            letterSpacing: 1,
            "&::before": {
              width: {sm: 20, lg:40},
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