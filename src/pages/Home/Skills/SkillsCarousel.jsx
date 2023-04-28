import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Box, Grid, Tooltip } from '@mui/material'
import useRootRedux from '../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../components/SkillIconImageItem'

const boxStyles = {
  // py: {xs: 1.5, md:2.5}, 
  width: "fit-content",
  p: {sm: 1.5, md: 1.5, lg: 2, xl:2.5},
  height: "100%",
  // height: { md:"110px", lg:"120px"},
  userSelect: "none",
  opacity: .9,  
  // background: "rgba(60,60,60,0.1)",
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
        autoPlay={false}
        // index={activeIndex}
        // onChange={(e) => setActiveIndex(e)}
      >
        {skills.map((item, index) => <Grid container key={index}>
        {item.map(_item => 
            <Grid item xs={2.8} sm={2.4} key={_item.name} align="center" my={3}>
              <Tooltip title={_item.name} arrow >
                <Box sx={boxStyles} variant="outlined">
                  <Box height={{xs: "25px", sm: 52, md:55, lg:70, xl: 75}} width={{xs: "25px", sm: 52, md:55, lg:70, xl: 75}}>
                    <SkillIconImageItem 
                      src={_item.monoUrl} 
                      duration={400} 
                      objectFit='scale-down'
                      sx={{filter: "invert(.95) brightness(.95)"}}
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