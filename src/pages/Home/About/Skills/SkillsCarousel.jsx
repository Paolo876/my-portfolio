import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Box, Grid, Tooltip, Fade } from '@mui/material'
import useRootRedux from '../../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'


const boxStyles = {
  width: "fit-content",
  py: {sm: .75, md: .75, lg: 1, xl:1},
  height: "100%",
  userSelect: "none",
  opacity: {xs: .8, md:.45},  
  background: "none",
  transition: "all 250ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover":{
    opacity:1,
    textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    transform: "scale(1.025)",
    borderColor: "primary.main",
  }
}

const chunkArray = (arr, chunkSize) => {
  return arr.reduce((all,one,i) => {
    const ch = Math.floor(i/chunkSize); 
    all[ch] = [].concat((all[ch]||[]),one); 
    return all
 }, [])
}


const SkillsCarousel = ({ isVisible }) => {
  const { skillsList } = useRootRedux();
  const [ skills, setSkills ] = useState([]);

  useEffect(() => {
    setSkills(chunkArray(skillsList, 10))
  }, [skillsList])
  

  return (
    <Box mr={{lg:4, xl:4}}>
      <Carousel
        indicators={true}
        interval={8000}
        duration={800} 
        navButtonsAlwaysInvisible={true}
      >
        {skills.map((item, index) => <Grid container key={index} pr={{md:2}}>
          {item.map((_item, _index) => 
            <Fade appear={isVisible} in={isVisible} timeout={600}  style={{ transitionDelay: `${(_index * 200) + 1100}ms` }} key={_item.name}>
              <Grid item xs={2.4} sm={2.1} md={2.4} align="left" my={1.75}>
                <Tooltip 
                  title={<Typography variant="body1" fontSize={12} fontWeight={300} letterSpacing={.4} px={.25}>{_item.name}</Typography>} 
                  arrow
                  placement="right"
                  enterDelay={500}
                  enterNextDelay={250}
                >
                  <Box sx={boxStyles}>
                    <Box height={{xs: 25, sm: 40, md:45, lg:50, xl: 55}} width="auto">
                      <SkillIconImageItem 
                        src={_item.monoUrl} 
                        duration={500} 
                        objectFit='scale-down'
                        sx={{filter: "invert(1) brightness(1.1)"}}
                        />
                    </Box>
                  </Box>
                </Tooltip>
              </Grid>
            </Fade>
          )}
        </Grid>)}
      </Carousel>
    </Box>
  )
}

export default SkillsCarousel