import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Box, Grid, Paper, Tooltip } from '@mui/material'
import useRootRedux from '../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../components/SkillIconImageItem'

const boxStyles = {
  // py: {xs: 1.5, md:2.5}, 
  width: "fit-content",
  p: 2.5,
  height: "100%",
  // height: { md:"110px", lg:"120px"},
  userSelect: "none",
  opacity: .9,  
  // background: "rgba(60,60,60,0.1)",
  background: "none",
  "&:hover": {
    background: "rgba(200,200,200,0.1)"
  }
}

const textStyles = {
  opacity: .85,
  fontSize: {xs: 10, sm: 10, md:11, lg: 11}, 
  fontWeight: 500, 
  mt: 1.75,
  // display: {xs: "none", sm: "initial"}
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
    <Box>
      <Carousel
        indicators={true}
        autoPlay={false}
        // index={activeIndex}
        // onChange={(e) => setActiveIndex(e)}
      >
        {skills.map((item, index) => <Grid container key={index}>
        {item.map(_item => 
            <Grid item xs={2.8} sm={2.4} key={_item.name} align="center" my={2}>
              <Tooltip title={_item.name} arrow >
                <Box sx={boxStyles} variant="outlined">
                  <Box height={{xs: "25px", sm: "35px", md:"37px", lg:"45px", xl: "75px"}} width={{xs: "25px", sm: "35px", md:"37px", lg:"45px", xl: "75px"}}>
                    <SkillIconImageItem 
                      src={_item.monoUrl} 
                      duration={400} 
                      objectFit='scale-down'
                      sx={{filter: "invert(.9) brightness(1)"}}
                      />
                  </Box>
                  {/* <Typography variant="body2" sx={textStyles} color="secondary.light">{_item.name}</Typography> */}
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