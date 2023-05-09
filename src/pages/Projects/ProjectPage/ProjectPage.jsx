import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <Grid container sx={{pl: {md: 1, lg: 8, xl: 13}, pr: { md: 1, lg:0}, pt: {sm: 3, lg:0}}}>
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
    </Grid>
  )
}

export default ProjectPage