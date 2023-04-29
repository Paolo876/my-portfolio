import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Box, Grid, Tooltip } from '@mui/material'
import useRootRedux from '../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../components/SkillIconImageItem'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const boxStyles = {
  width: "fit-content",
  p: {sm: 1.5, md: 1.5, lg: 2, xl:2.5},
  height: "100%",
  userSelect: "none",
  opacity: .9,  
  background: "none",
  "&:hover": {
    background: "rgba(150,150,150,0.1)"
  }
}


const chunkArray = (arr, chunkSize) => {
  return arr.reduce((all,one,i) => {
    const ch = Math.floor(i/chunkSize); 
    all[ch] = [].concat((all[ch]||[]),one); 
    return all
 }, [])
}


const SkillsCarousel = () => {
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
        {skills.map((item, index) => <Grid container key={index}>
        {item.map(_item => 
            <Grid item xs={2.4} sm={2.4} key={_item.name} align="center" my={3}>
              <Tooltip 
                title={<Typography variant="body1" fontSize={13.5} color="primary.main" fontWeight={500}>{_item.name}</Typography>} 
                arrow 
              >
                <Box sx={boxStyles} variant="outlined">
                  <Box height={{xs: 45, sm: 52, md:55, lg:70, xl: 75}} width={{xs: 45, sm: 52, md:55, lg:70, xl: 75}}>
                    <SkillIconImageItem 
                      src={_item.monoUrl} 
                      duration={800} 
                      objectFit='scale-down'
                      sx={{filter: "invert(1) brightness(1.1)"}}
                      />
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
          )}
        </Grid>)}
      </Carousel>
    </Box>
  )
}

export default SkillsCarousel