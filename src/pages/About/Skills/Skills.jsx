import { Grid, Typography, Box } from '@mui/material'
import TechSkills from './SkillsGridItems/TechSkills'
import useRootRedux from '../../../hooks/useRootRedux'
import Certifications from './SkillsGridItems/Certifications'
import OtherSkills from './SkillsGridItems/OtherSkills'


const baseTextStyles = {
  fontSize: {xs: 11, sm: 14.5, md: 15, lg:15, xl: 15},
  fontWeight: 300,
  opacity: .55,
  letterSpacing: .4,
  textShadow: "1px 1px 5px rgba(10,10,10,.75)",
}


const Skills = () => {
  const { skillsList } = useRootRedux();

  const webDevSkillsList = skillsList.filter(item => ["frontend", "backend", "styling"].includes(item.type))
  const softwareDevSkillsList = skillsList.filter(item => ["programming"].includes(item.type))


  return (
    <Box
      sx={{
        position: "relative", 
        px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
        pt: {xs:8, sm: 12, md: 14, lg: 15}, 
        pb: {xs:3, sm: 4, md: 4, lg: 6}, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
    <Grid 
      container       
      sx={{
        justifyContent: "center", 
        alignItems: "flex-start", 
        maxWidth: "1500px", 
        mx: "auto",
      }}
    >
        <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(15,15,15,.5)", zIndex: -1}}></Box>
        <Grid item xs={12}>
          {webDevSkillsList.length !== 0 && <TechSkills 
            skills={webDevSkillsList} 
            title="Web Development" 
            description={<Typography sx={baseTextStyles}>
              My projects are mainly built using ReactJS or NextJS on the Client-Side, ExpressJS and NodeJS on the Server-Side, and MongoDB or MySQL for database implementations
              along with related libraries and frameworks.
            </Typography>}
            isMain={true}
          />}
          {softwareDevSkillsList.length !== 0 && <TechSkills 
            skills={softwareDevSkillsList} 
            title="Software Development"
            description={<Typography sx={baseTextStyles}>
              Although my niche is in web development, I also have knowledge in software development, data structures & algorithms, and developing a working program with the GUI
              and other features.
            </Typography>}
          />}
          <Certifications/>
          <OtherSkills/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills

