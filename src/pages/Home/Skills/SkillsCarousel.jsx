import { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography, Box, Grid, Paper } from '@mui/material'
import useRootRedux from '../../../hooks/useRootRedux'
import SkillIconImageItem from '../../../components/SkillIconImageItem'

const boxStyles = {
  py: {xs: 1.5, md:2.5}, 
  my: {xs: .5, md:1}, 
  width: "100%",
  height: { md:"110px", lg:"120px"},
  userSelect: "none",
  opacity: .9,  
  background: "rgba(60,60,60,0.1)"
}

const textStyles = {
  opacity: .85,
  fontSize: {xs: 10, sm: 10, md:11, lg: 12}, 
  fontWeight: 500, 
  mt: 1.5,
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
            <Grid item xs={2.8} sm={2.25} key={_item.name} align="center">
              <Paper sx={boxStyles} elevation={5} variant="elevation">
                <Box height={{xs: "25px", sm: "35px", md:"37px", lg:"45px", xl: "55px"}} width={{xs: "25px", sm: "35px", md:"37px", lg:"45px", xl: "55px"}}>
                  <SkillIconImageItem 
                    src={_item.monoUrl} 
                    duration={400} 
                    objectFit='scale-down'
                    sx={{filter: "invert(1) brightness(.75)"}}
                    />
                </Box>
                <Typography variant="body2" sx={textStyles} color="secondary">{_item.name}</Typography>
              </Paper>

            </Grid>
          )}
        </Grid>)}
      </Carousel>
    </Box>
  )
}

export default SkillsCarousel