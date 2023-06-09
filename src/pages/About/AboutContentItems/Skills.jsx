import { Grid, Typography, Box } from '@mui/material'
import TechSkills from './SkillsGridItems/TechSkills'
import useRootRedux from '../../../hooks/useRootRedux'
import Certifications from './SkillsGridItems/Certifications'
import OtherSkills from './SkillsGridItems/OtherSkills'


const boxTextStyles = {
  fontWeight: 300,
  display: "inline",
};


const baseTextStyles = {
  fontSize:{xs: 11, sm: 12, md: 11.5, lg:14, xl: 15},
  fontWeight: 200,
  textAlign: "justify", 
  textJustify: "inter-word", 
  mixBlendMode: "difference",
  lineHeight: 1.4,
  opacity: .9,
}


const Skills = () => {
  const { skillsList } = useRootRedux();

  const webDevSkillsList = skillsList.filter(item => ["frontend", "backend", "styling"].includes(item.type))
  const softwareDevSkillsList = skillsList.filter(item => ["programming"].includes(item.type))

  return (
    <Grid container       
      sx={{
      px: {xs:2.5, sm: 3, md: 4, lg: 5.5, xl: 4.5}, 
      pt: {xs:8, sm: 12, md: 14, lg: 15}, 
      pb: {xs:3, sm: 4, md: 4, lg: 5}, 
      justifyContent: "center", 
      alignItems: "flex-start", 
      maxWidth: "1500px", 
      mx: "auto",
      }}>
      <Box sx={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(25,25,25,.15)", mixBlendMode: "overlay", zIndex: -1}}></Box>
      <Grid item xs={12}>
        <TechSkills 
          skills={webDevSkillsList} 
          title="Web Development" 
          description={<Typography sx={baseTextStyles}>
            My projects are mainly built using <Box sx={boxTextStyles} component="span">ReactJS </Box> 
            or <Box sx={boxTextStyles} component="span">NextJS</Box> for the Client-Side, and 
            <Box sx={boxTextStyles} component="span"> NodeJS</Box> - <Box sx={boxTextStyles} component="span">ExpressJS </Box>
            for the Server-Side along with related libraries and frameworks.
          </Typography>}
          isMain={true}
        />
        <TechSkills 
          skills={softwareDevSkillsList} 
          title="Software Development"
          description={<Typography sx={baseTextStyles}>
            Although my niche is in web development, I also have knowledge in software development, data structures & algorithms, and developing a working program with the GUI
            and other features.
          </Typography>}
        />
        <Certifications/>
        <OtherSkills/>
      </Grid>

    </Grid>
  )
}

export default Skills

