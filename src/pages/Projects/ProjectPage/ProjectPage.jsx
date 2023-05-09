import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import DocumentHead from '../../../components/DocumentHead'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ProjectPage = ({ name, title}) => {
  const navigate = useNavigate();

  return (
    <>
      <DocumentHead
        title={`Paolo Bugarin | Projects | `}
        description="I am a full stack web developer based in Los Angeles, California"
        keyword="react, reactjs, redux, next, nextjs, node, nodejs, mern, express, expressjs, mongodb, sequelize, mysql, developer, fullstack developer, full stack developer, javascript"
      />
      <Grid container sx={{px: {xs:3, sm: 3, md: 1.5, lg: 3}, pt: {xs:10, sm: 11, md: 13, lg: 13, xl: 14}, pb: 8, justifyContent: "center", alignItems: "flex-start", maxWidth: "1500px", mx: "auto", minHeight: "100vh"}}>
        <Grid item xs={12}>
          <Button 
            startIcon={<ArrowBackIosIcon/>} 
            variant="contained" 
            size="small" 
            onClick={() => navigate("/projects")}
            sx={{fontWeight: 500}}
          >
            Back To Projects
          </Button>
        </Grid>

        <Grid item xs={12} lg={2.25}>
          {/* <Introduction/> */}
        </Grid>
        <Grid item xs={12} lg={9.75}>
          {/* content here */}
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectPage