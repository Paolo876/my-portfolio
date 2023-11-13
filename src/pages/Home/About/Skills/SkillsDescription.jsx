import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Stack, ButtonBase, Fade } from '@mui/material'
import { keyframes } from '@mui/system';


const slideRight = keyframes`
  0% {
    transform: translateX(-1.5em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const SkillsDescription = ({ isVisible }) => {
  const navigate = useNavigate();

  return (
    <Stack pl={{xs: 3, sm: 3, md: 2, lg: 3.5, xl: 5}}>
      <Fade appear={isVisible} in={isVisible} timeout={1100}  style={{ transitionDelay: "1300ms" }}>
        <Box mb={{md: 5, lg: 6, xl: 6}}>
          <Typography 
            variant="h2" 
            fontWeight={500}
            fontSize={{md: 30, lg: 35, xl: 40}} 
            letterSpacing={.5}
            textTransform="none"
            align="right"
            sx={{
              textShadow: "1px 1px 7px rgba(10,10,10,.75)",
            }}
          >
            My Expertise
          </Typography>
        </Box>
      </Fade>
      <Fade appear={isVisible} in={isVisible} timeout={1100}  style={{ transitionDelay: "1550ms" }}>
        <Box ml="auto" sx={{ maxWidth: "100%" }} mb={{md: 3, lg: 5, xl:7}}>
          <Typography 
            variant="body1" 
            sx={{
              textAlign: { xs: "justify", md:"right" }, 
              textJustify: "inter-word", 
              fontSize: {xs: 12, sm: 13, md: 14, lg:16, xl: 16},
              opacity: .5,
              letterSpacing: 1.25,
              lineHeight: 1.8,
              fontWeight: 100,
              textShadow: "1px 1px 5px rgba(10,10,10,.75)",
            }}
          >
            {/* My skillset is heavily focused on designing and developing web based applications. 
            However, I do have ample knowledge in software development, database management, and other related technologies. */}
            Although my skillset is heavily focused on designing and developing web based applications, I also have ample knowledge in software development, database management, and other related technologies.
          </Typography>
        </Box>
      </Fade>
      <Box sx={{opacity: 0, animation: isVisible ? `${slideRight} 1100ms ease forwards 2150ms` : "none"}}>
        <Box align="right">
          <ButtonBase
            onClick={() => navigate("/about")}
            sx={{
              borderRight: 2, 
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.2rem", lg: "1.35rem", xl:"1.35rem" },
              lineHeight: 1.4, 
              color: "white", 
              borderColor: "primary.dark",
              px: 1.5,
              py: .25,
              fontWeight: 600,
              letterSpacing: .4,
              opacity: .85,
              transition: "all 250ms ease-in-out",
              fontFamily: "Manrope",
              "&:hover":{
                opacity:1,
                textShadow: "1px 1px 3px rgba(100,100,100,.75)",
                transform: "scale(1.02)",
                borderColor: "primary.main",
              }
            }}
          >
            See All My Skills
          </ButtonBase>
        </Box>
      </Box>
    </Stack>
  )
}

export default SkillsDescription