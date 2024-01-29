import React from 'react'
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton, Fade } from '@mui/material';
import { keyframes } from '@mui/system';


const slideIn = keyframes`
  0% {
    transform: translateX(-2.5em) scale(.8);
    opacity: 0;
  }
  60% {
    transform: translateX(0)  scale(1);
    opacity: .75;

  }
  100% {
    opacity: 1;
  }
`

const ProjectSelection = ({ projects, setActiveProject, setIsHovered, activeProject }) => {
  const navigate = useNavigate();

  return (

    <List sx={{mt: {xs: 5, sm: 10, md: 10}, pb: 5}}>
    {projects.map((item, index) => <ListItem key={item.name} sx={{px: 0, py: {xs: .5, sm:.75}, my: 0, mx:0, width: "fit-content", animation: `${slideIn} 800ms forwards ease ${(index * 100) + 1200}ms`, opacity: 0}}>
      <ListItemButton 
        className={index === activeProject ? "active" : ""}
        disableRipple
        disableGutters
        onMouseOver={() => { setActiveProject(index); setIsHovered(true) }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`${item.name}`)}
        sx={{
          width: "fit-content", 
          alignItems: "left", 
          display: "flex", 
          justifyContent: {lg:"left"},
          textTransform: "none",
          fontSize: {xs: 22, sm: 25, md: 25.5, lg:25.5, xl: 27},
          fontWeight: 300,
          textShadow: "1px 1px 5px rgba(100,100,100,.75)",
          transition: "all 450ms ease",
          opacity: {xs: .95, lg:.85},
          letterSpacing: {xs:1, sm: 1.15},
          lineHeight: 1.1,
          zIndex: 2,
          my: {xs: .75, sm: .75, md: 1.5, lg: .5, xl: .75}, 
          py: {xs:.1, sm:.1},
          mx: 0,
          px:0,
          position: "relative",
          borderLeft: 2,
          borderColor: "rgba(120,120,120,.85)",
          pl: {xs: .75, sm: 1, lg: 1.75},
          transform: "skewX(-3deg)",
          "&:hover, &.active": {
            opacity: 1,
            fontWeight: 500,
            transform: "scale(1.02) translateX(2px) skewX(-3deg)",
            textShadow: "1px 1px 5px rgba(100,100,100,.5)",
            background: "none",
            borderColor: "primary.main",
            letterSpacing: 1.25,
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