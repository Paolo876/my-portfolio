import { useState, useEffect } from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'

const boxStyles = {
  width: "fit-content",
  py: {sm: .75, md: .15, lg: .5, xl:.75},
  height: "100%",
  userSelect: "none",
  opacity: .75,  
  background: "none",
  transition: "all 250ms ease-in-out",
  fontFamily: "Manrope",
  "&:hover, &.active":{
    opacity:1,
    transform: "scale(1.075)",
  },
  "&:hover p, &.active p": {
    color: "primary.main",
    opacity:1,
    letterSpacing: 1.1,
    fontWeight: 600, 
    textShadow: "1px 1px 3px rgba(100,100,100,.5)",
  }
}


const TechSkills = ({ skills, title, description, isMain }) => {
  const [ activeSkill, setActiveSkill ] = useState(0);
  const [ isHovered, setIsHovered ] = useState(false)

  useEffect(() => {
    // if(isMain){
      const interval = setInterval(
        () => setActiveSkill(prevState => {
          if(prevState === skills.length - 1) {
            return 0
          } else {
            return prevState + 1
          }
        }), isMain ? 3000 : 4500)
      if(isHovered) clearInterval(interval) 
      return () => clearInterval(interval)    
    // }
  }, [isHovered])


  return (
    <Grid container mb={{xs: 9, sm: 12, md: 13, lg: 15, xl: 18}} columnSpacing={{xl: 5}}>
      <Grid item xs={12} sm={5} md={5.5} lg={4} xl={4} mb={{xs: 1.5, sm: 3, md: 0}}>
        <Box mb={{xs: 1, sm: 5, md: 5, lg: 5, xl:8}}>
          <Typography 
            variant="h2" 
            align="left" 
            fontWeight={400}
            fontSize={{xs: 28, sm: 28, md: 28, lg: 30, xl: 30}} 
            letterSpacing={{xs: .5, xl:1}}
            lineHeight={{xs:1.25}} 
            textTransform="none"
            sx={{
              textShadow: "1px 1px 7px rgba(25,25,25,.75)",
            }}
          >
            {title}
          </Typography>
        </Box>
        {isMain && <Box pr={{sm: 3, md: 5, lg:0}} mb={{xs: 2, sm: 0, lg: 5}} mt={{xs:2, sm: 0}} sx={{borderLeft: 2, pl: {xs: 1, sm:1.5}, borderColor: "primary.dark"}}>
          {description} 
        </Box>}
      </Grid>

      <Grid item xs={12} sm={7} md={6.5} lg={8} xl={8}>

        <Grid container justifyContent={{xs: "right", md: "left", lg: "right"}}>
          {!isMain && 
            <Grid item xs={12} sm={11} md={12} lg={6} pr={{sm: 0, md: 0, lg: 5, xl: 8}} mt={{sm: 1, md: 2}} mb={{xs: 3, sm: 4, md: 4, lg: 0}} > 
              <Box sx={{borderLeft: 2, pl: {xs: 1, sm:1.5}, borderColor: "primary.dark"}}>
                {description}
              </Box>
            </Grid>
          }
          
          {skills.map((item, index) => 
            <Grid item xs={2.4} sm={2.9} md={2.4} lg={1.4} xl={1.5} key={item.name} align="center">
              <Box 
                sx={{
                  my: {xs: 1.15, md:1.5, lg: 1.75}, 
                  userSelect: "none",
                }} 
              >
                <Box 
                  sx={boxStyles} 
                  className={index === activeSkill ? "active" : ""} 
                  onClick={() => { setActiveSkill(index); setIsHovered(true)}}
                  onMouseOver={() => { setActiveSkill(index); setIsHovered(true)}} 
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Box height={{xs: 30, sm: 35, md:38, lg:40, xl: 45}} width="auto">
                    <SkillIconImageItem 
                      src={item.monoUrl} 
                      duration={500} 
                      objectFit='scale-down'
                      sx={{filter: "invert(1) brightness(1.1)"}}
                      />
                  </Box>                  
                  <Typography 
                    variant="body2" 
                    sx={{
                      opacity: .4,
                      fontSize: {xs: 10, sm: 10, md: 11, lg: 11}, 
                      fontWeight: 300, 
                      mt: {xs: 1, sm:1.25, md: 2},
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      transition: "all 400ms ease-in-out",
                      textShadow: "1px 1px 7px rgba(25,25,25,.75)",
                    }}
                  >{item.name}</Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TechSkills