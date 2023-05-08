import { Typography, Box, Divider, Paper, Tooltip, List, Stack, Grid } from '@mui/material'
import SkillIconImageItem from '../../../components/SkillIconImageItem'
import useRootRedux from '../../../hooks/useRootRedux';


const boxStyles = {
  width: "fit-content",
  p: {sm: 1.5, md: 1.5, lg: 2, xl:1},
  height: "100%",
  userSelect: "none",
  opacity: .9,  
  background: "none",
  "&:hover": {
    background: "rgba(150,150,150,0.1)"
  }
}


const ProjectItemDescription = ({ title, briefDescription, technologies, features, name }) => {
  const { skillsList } = useRootRedux();

  return (
    <Stack sx={{height: "100%", width: "100%"}}>
      <Box>
        <Typography 
          variant="h3" 
          align="left" 
          fontWeight={800} 
          fontSize={{xs:28, sm: 28, md: 30, lg: 32, xl: 35}} 
          letterSpacing={{xs:1, sm:1, md: 1.25, lg: 1.5, xl:2}} 
          lineHeight={{xl:1}} 
          color="primary.main"
        >
          {title}
        </Typography>
        <Box sx={{background: "rgba(239,235,229,1)", height: 2, width: {xs: 12, sm: 12, md: 12}, mr: "auto", mt: 1.5, ml: .2, mixBlendMode: "difference", opacity: .5}}></Box>

        <Box sx={{pl: .25, pr: 1, mt: 3}}>
          <Typography 
            variant="body1" 
            fontSize={{xs: 12, sm: 12.5, md: 13, lg:14, xl: 14.5}} 
            fontWeight={200} 
          >
            {briefDescription}
          </Typography>
          {/* <Box sx={{mt: 3}}>
          <Typography              
              variant="h6" 
              sx={{
                fontWeight: 600,
                fontSize: 18,
                mixBlendMode: "difference",
                textTransform: "none",
                letterSpacing: .5,
              }}>Features: </Typography>
              <List component="ul" sx={{listStyle: "circle", py: 0.15, px: .25}}>
                {features.map(_item => <ListItem key={_item} sx={{py: .5, px: .25, ml: 2.75, display: 'list-item', mixBlendMode:"difference", fontSize: 15, fontWeight: 200}}>{_item}</ListItem>)}
              </List>
          </Box> */}
        </Box>
      </Box>

      <Box sx={{mt:"auto"}}>
          <Typography              
            variant="h6" 
            color="secondary.light"
            sx={{
              fontWeight: 700,
              fontSize:{xs: 17, sm: 17, md: 17, lg:17, xl: 17},
              mixBlendMode: "difference",
              textTransform: "none",
              letterSpacing: .5,
            }}
          >
            Main Technologies Used: 
          </Typography>

            <Grid container sx={{mt:1.5}}>
              {skillsList && technologies.map(item => {
                const tech = skillsList.find(_item => _item.name === item)
                if(tech) return <Grid item xs={2.4} key={tech.name} align="center" my={1}>
                  <Tooltip 
                      title={<Typography variant="body1" fontSize={12} color="primary.main" fontWeight={400}>{tech.name}</Typography>} 
                      arrow 
                    >
                  <Box sx={boxStyles} variant="outlined">
                    <Box height={{xs: 21, sm: 22, md:23, lg:24, xl: 35}} width={{xs: 21, sm: 22, md:23, lg:24, xl: 35}}>
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
    </Stack>
  )
}

export default ProjectItemDescription