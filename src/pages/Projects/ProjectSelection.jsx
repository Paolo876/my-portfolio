import React from 'react'
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton } from '@mui/material';


const ProjectSelection = ({ projects, setActiveProject, setIsHovered, activeProject }) => {
  const navigate = useNavigate();


  return (
    <List sx={{mt: {xs: 5, sm: 10, md: 0}}}>
    {projects.map((item, index) => <ListItem key={item.name} sx={{px: 0, py: .5, my: 0, mx:0, width: "fit-content"}}>
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
          fontSize: {xs: 15, sm: 24, md: 28, lg:28, xl: 28},
          fontWeight: 300,
          textShadow: "1px 1px 5px rgba(100,100,100,.25)",
          transition: "all 450ms ease",
          opacity: .6,
          letterSpacing: {xs:.5, lg: .75},
          lineHeight: 1.1,
          my: {xs: .2, sm: .75, md: 2, lg: .5, xl: .75}, 
          py: {xs:.2, sm:1, xl: .1},
          mx: 0,
          px:0,
          position: "relative",
          borderLeft: 2,
          borderColor: "rgba(120,120,120,.85)",
          pl: {xs: .75, sm: 1, lg: 1.75},

          // "&::before": {
          //   content: '""',
          //   position: "absolute",
          //   height: 3,
          //   width: 0,
          //   backgroundColor: "primary.main",
          //   bottom: 0,
          //   left: {lg:"50%"},
          //   transform: {lg:"translateX(-50%)"},
          //   transition: "all 200ms ease"
          // },
          "&:hover, &.active": {
            opacity: 1,
            fontWeight: 400,
            transform: "scale(1.04) translateX(2px)",
            textShadow: "1px 1px 5px rgba(100,100,100,.5)",
            background: "none",
            borderColor: "primary.main",
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