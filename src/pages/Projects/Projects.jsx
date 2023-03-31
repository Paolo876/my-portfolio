import { useState } from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import PageContainer from "../../components/PageContainer"
import ProjectNavigation from './ProjectNavigation'

const MOCK_PROJ_LIST = [
  {
    name: "moby", 
    title: "Moby",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis dignissim nunc. Fusce at ipsum dapibus, pulvinar ex et, scelerisque leo. Praesent justo elit, tristique.",
    technologies: [ "javascript", "react", "redux", "socketio", "nodejs", "expressjs", "mysql", ""],
    type: "personal",
    images: [],
    coverImage: "",
    features: [],

  }
]
const Projects = () => {
  const [ projectsList, setProjectsList ] = useState(MOCK_PROJ_LIST)


  return (
    <PageContainer>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">My Projects</Typography>
          <Divider/>
          <ProjectNavigation projects={projectsList}/>
        </Grid>
        <Grid item xs={10}>
          {/* list here */}
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Projects