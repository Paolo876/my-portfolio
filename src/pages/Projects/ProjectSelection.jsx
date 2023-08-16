import React from 'react'
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton } from '@mui/material';


const ProjectSelection = ({ projects, setActiveProject, setIsHovered, activeProject }) => {
  const navigate = useNavigate();


  return (
    <List>
    {projects.map((item, index) => <ListItem key={item.name} sx={{px: {xs:1, sm: 1.5,}}}>
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
          fontSize: {xs: 15, sm: 24, md: 28, lg:25, xl: 30},
          fontWeight: 300,
          textShadow: "1px 1px 5px rgba(100,100,100,.25)",
          transition: "all 450ms ease",
          opacity: {xs: .6, sm:.4},
          letterSpacing: .5,
          my: {xs: .2, sm: .75, md: 2, lg: .5, xl:1.5}, 
          py: {xs:.2, sm:1},
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
              width: {xs: 15, sm: 20, lg:40},
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