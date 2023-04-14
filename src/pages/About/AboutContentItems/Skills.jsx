import { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import WebDevSkills from './SkillsGridItems/WebDevSkills'
import useRootRedux from '../../../hooks/useRootRedux'
import useFirestoreActions from '../../../hooks/useFirestoreActions'

const Skills = () => {
  const { skillsList, setSkills } = useRootRedux();
  const { getDocumentFromCollection } = useFirestoreActions();

  useEffect(() => {
    if(skillsList.length === 0){
      getDocumentFromCollection('user', 'information').then(data => setSkills(data.skills))
    }
  }, [])


  return (
    <Grid container sx={{p: 5, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", mt: 5}}>
      <Box>
        <Typography variant="h5" sx={{mixBlendMode: "difference"}} align='center' fontSize="1.75rem">Skills and Certifications</Typography>
        <Box sx={{background: "white", height: "4px", width: "35px", mb: 10, mt: 3, mx: "auto", mixBlendMode: "difference" }}></Box>
      </Box>

      <Grid item xs={10}>
        <WebDevSkills/>
      </Grid>

    </Grid>
  )
}

export default Skills

