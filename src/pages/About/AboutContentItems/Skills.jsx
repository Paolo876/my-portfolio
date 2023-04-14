import { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import TechSkills from './SkillsGridItems/TechSkills'
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

  const webDevSkillsList = skillsList.filter(item => ["frontend", "backend", "styling"].includes(item.type))
  const softwareDevSkillsList = skillsList.filter(item => ["programming"].includes(item.type))

  return (
    <Grid container sx={{p: 5, justifyContent: "center", alignItems: "center", maxWidth: "1900px", mx: "auto", mt: 5}}>
      <Box>
        <Typography variant="h5" sx={{mixBlendMode: "difference"}} align='center' fontSize="1.75rem">Skills and Certifications</Typography>
        <Box sx={{background: "white", height: "4px", width: "35px", mb: 10, mt: 3, mx: "auto", mixBlendMode: "difference" }}></Box>
      </Box>

      <Grid item xs={8.75}>
        <TechSkills skills={webDevSkillsList} title="Web Development"/>
        <TechSkills skills={softwareDevSkillsList} title="Software Development"/>
      </Grid>

    </Grid>
  )
}

export default Skills

