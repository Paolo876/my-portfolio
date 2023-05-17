import { useNavigate } from 'react-router-dom';
import { Typography, Box, Tooltip, Button, Stack, Grid } from '@mui/material';

import SkillIconImageItem from '../../../components/SkillIconImageItem'
import useRootRedux from '../../../hooks/useRootRedux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const boxStyles = {
  width: "fit-content",
  py: {xs: 0, sm: 1, md: 1, lg: 1, xl:1.10},
  height: "100%",
  userSelect: "none",
}


const ProjectItemDescription = ({ title, briefDescription, technologies, features, name }) => {
  const navigate = useNavigate();
  const { skillsList } = useRootRedux();

  return (
    <Stack sx={{height: "100%", width: "100%"}}>
      <Box>
        <Typography 
          variant="h3" 
          align="left" 
          fontWeight={800} 
          fontSize={{ xs:24, sm: 24, md: 30, lg: 30, xl: 32 }} 
          letterSpacing={{xs:1, sm:1.25, md: 1.25, lg: 1.5, xl:2}} 
          lineHeight={{xl:1}} 
          sx={{mixBlendMode: "difference"}}
        >
          {title}
        </Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: 2, width: {xs: 12, sm: 12, md: 12}, mr: "auto", mt: 1.5, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>

        <Box sx={{pl: .5, pr: 1, mt: {xs: 1.5, lg: 2, xl:3}}}>
          <Typography 
            variant="body1" 
            fontSize={{xs: 12, sm: 12, md: 13, lg:13.5, xl: 14}} 
            fontWeight={200} 
            sx={{mixBlendMode: "difference", opacity: .9}}
          >
            {briefDescription}
          </Typography>
        </Box>
      </Box>

      <Box sx={{mt:"auto", pl: .5, display: {xs: "none", md: "initial"}}}>
        <Typography              
          variant="h6" 
          sx={{
            fontWeight: 700,
            fontSize:{ md: 17, lg:16, xl: 17 },
            textTransform: "none",
            mixBlendMode: "difference",
            letterSpacing: .5,
          }}
        >
          Main Tech Stack: 
        </Typography>
        <Grid container sx={{mt:{lg: .5, xl:.5}, opacity: .6}}>
          {skillsList && technologies.map(item => {
            const tech = skillsList.find(_item => _item.name === item)
            if(tech) return <Grid item xs={2.05} key={tech.name} align="center" my={.25}>
              <Tooltip 
                title={<Typography variant="body1" fontSize={12} color="primary.main" fontWeight={400}>{tech.name}</Typography>} 
                arrow 
                >
              <Box sx={boxStyles} variant="outlined">
                <Box height={{xs: 21, sm: 22, md:23, lg:24, xl: 26}} width={{xs: 21, sm: 22, md:23, lg:24, xl: 26}}>
                  <SkillIconImageItem 
                    src={tech.monoUrl} 
                    duration={800} 
                    objectFit='scale-down'
                    sx={{filter: "invert(1) brightness(.8)"}}  
                  />
                </Box>
              </Box>
            </Tooltip>
            </Grid>
          })}
        </Grid>
      </Box>
      <Box mt={{xs: 3, sm: 6}}>
        <Button 
          variant="outlined" 
          size="small" 
          color="primary"
          sx={{fontWeight: 500, fontSize: {xs: 11, sm: 11, md: 12, lg: 12, xl: 13}, px: 2}}
          onClick={() => navigate(name)}
          >Read More
          <ArrowForwardIosIcon sx={{fontSize: "inherit", ml: 1.25}}/>  
        </Button>
      </Box>
    </Stack>
  )
}

export default ProjectItemDescription