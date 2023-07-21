import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Box, Typography, ListItem, ListItemButton, List } from '@mui/material';
import ProjectSelection from '../ProjectSelection';


const ProjectItem = ({ projects }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
    <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
      <Grid item xs={3}>
        <List>
          {projects.map(item => <ListItem key={item.name}>
            <ListItemButton 
              className={id === item.name ? "active" : ""}
              disableRipple
              disableGutters
              onClick={() => navigate(`/projects/${item.name}`)}
              sx={{
                width: "100%", 
                alignItems: "flex-start", 
                display: "flex", 
                justifyContent: "left",
                textTransform: "none",
                fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 20},
                fontWeight: 300,
                textShadow: "1px 1px 5px rgba(10,10,10,.75)",
                transition: "all 150ms ease",
                opacity: .55, 
                my: 1, 
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  height: 3,
                  width: 0,
                  backgroundColor: "primary.main",
                  bottom: "50%",
                  left: -15,
                  transform: "translateX(-50%)",
                  transition: "all 200ms ease"
                },
                "&:hover": {
                  opacity: 1,
                  fontWeight: 500,
                  transform: "scale(1.015)",
                  background: "none",
                },
                "&.active": {
                  opacity: 1,
                  fontWeight: 600,
                  fontSize: {xs: 12.5, sm: 14.5, md: 14.5, lg:16, xl: 21},
                  transform: "scale(1.015)",

                  "&::before": {
                    width: 13,
                    backgroundColor: "primary.main",
                  }
                }
                }}>
              {item.title}
            </ListItemButton>
          </ListItem>)}
        </List>
      </Grid>
      <Grid item xs={9}></Grid>     
    </Grid>


      {/* background  */}
      <Box sx={{position: "absolute", height: "100%", width: "100%", top: 0, left: 0, zIndex: -1}}>
        <Grid container sx={{justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto"}}>
          <Grid item xl={3}></Grid>
          <Grid item xl={6} sx={{background: "rgba(38,38,38,1)", height: "100vh", width: "100%", transform: "skewX(-7deg) translateX(-105%)"}}></Grid>
          <Grid item xl={3} align="right" sx={{background: "", height: "75vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", zIndex: -2}}>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProjectItem