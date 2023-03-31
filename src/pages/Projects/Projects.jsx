import React from 'react'
import { Grid } from '@mui/material'
import PageContainer from "../../components/PageContainer"

const MOCK_PROJ_LIST = [
  {
    name: "moby", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "personal",

  }
]
const Projects = () => {
  return (
    <PageContainer>
      <Grid container>

      </Grid>
    </PageContainer>
  )
}

export default Projects