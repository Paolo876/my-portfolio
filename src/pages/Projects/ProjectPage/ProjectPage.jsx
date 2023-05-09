import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Box, Button, Grid } from '@mui/material';
import DocumentHead from '../../../components/DocumentHead'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Description from './Description';


const ProjectPage = ({ projects }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const project = projects.find(item => item.name === id)
  console.log(project)
  return (
    <>
      <DocumentHead
        title={`Paolo Bugarin | Projects | ${project.title}`}
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container sx={{px: {xs:3, sm: 3, md: 1.5, lg: 3}, pt: {xs:10, sm: 11, md: 13, lg: 13, xl: 9}, pb: 8, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", minHeight: "100vh"}}>


        <Grid item xs={12} lg={3}>
          {/* <Introduction/> */}
          <Box mb={5}>
            <Button 
              startIcon={<ArrowBackIosIcon/>} 
              variant="contained" 
              size="small" 
              onClick={() => navigate("/projects", { state })}
              sx={{fontWeight: 500}}
              color="secondary"
            >
              Back To Projects
            </Button>
          </Box>

          <Description
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            type={project.type}
            url={project.url}
            githubUrl={project.githubUrl}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          {/* content here */}
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectPage