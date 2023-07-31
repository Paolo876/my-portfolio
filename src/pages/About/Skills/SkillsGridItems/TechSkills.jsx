import { useState, useEffect } from 'react'
import { Typography, Box, Grid } from '@mui/material'
import SkillIconImageItem from '../../../../components/SkillIconImageItem'

const boxStyles = {
  width: "fit-content",
  py: {sm: .75, md: .75, lg: 1, xl:1},
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
    if(isMain){
      const interval = setInterval(
        () => setActiveSkill(prevState => {
          if(prevState === skills.length - 1) {
            return 0
          } else {
            return prevState + 1
          }
        }), 2000)
      if(isHovered) clearInterval(interval) 
      return () => clearInterval(interval)    
    }
  }, [isHovered])

  console.log(activeSkill, skills.length)
  return (
    <Grid container mb={{xs: 4.5, sm: 10, md: 10, lg: 10, xl: 15}} columnSpacing={{xl: 5}}>
      <Grid item xs={11} sm={4.5} md={2.75} lg={3} xl={4} mb={{xs: 1.5, sm: 3, md: 0}}>
        <Box mb={8}>
          <Typography 
              variant="h2" 
              align="left" 
              fontWeight={400}
              fontSize={{xs: 26, sm: 27, md: 28, lg: 30, xl: 30}} 
              letterSpacing={{xs: .5, xl:1}}
              lineHeight={{xs:1}} 
              textTransform="none"
              sx={{
                textShadow: "1px 1px 7px rgba(25,25,25,.75)",
              }}
            >
            {title}
          </Typography>
        </Box>
        {isMain && <Box pr={{sm: 0, md: 1.5, xl:0}} mb={{lg: 5}} sx={{borderLeft: 2, pl: 1.5, borderColor: "primary.dark"}}>
          {description} 
        </Box>}
      </Grid>

      <Grid item xs={12} sm={7.5} md={9.25} lg={9} xl={8}>

        <Grid container justifyContent={{xs: "right", md: "right"}}>
          {!isMain && 
            <Grid item xs={12} md={6} pr={{md: 5, lg: 6, xl: 10}} pl={{sm: 6, md: 0, lg: 1, xl: 2}} mt={{sm: 1, md: 2}} mb={{xs: 1, sm: 3, md: 0}} > 
              <Box>
                {description}
              </Box>
            </Grid>
          }
          
          {skills.map((item, index) => 
            <Grid item xs={2.4} sm={2.7} md={1.5} lg={1.5} key={item.name} align="center">
              <Box 
                sx={{
                  my: {xs: 1.15, md:1.75}, 
                  userSelect: "none",
                }} 
              >
                <Box 
                  sx={boxStyles} 
                  className={isMain && index === activeSkill ? "active" : ""} 
                  onMouseOver={() => { setActiveSkill(index); setIsHovered(true) }} 
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Box height={{xs: 25, sm: 40, md:45, lg:50, xl: 50}} width="auto">
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
                      fontSize: {xs: 10, sm: 11, md: 11, lg: 11}, 
                      fontWeight: 300, 
                      mt: {xs: 1, sm:1.5, md: 2},
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      transition: "all 400ms ease-in-out",

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