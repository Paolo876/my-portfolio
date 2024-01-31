import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Step, StepLabel, Stepper, Typography, Box, Fade } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'
import { useInView } from 'react-intersection-observer';


const ProcessStepperMobile = ({ processItems }) => {
  const [ activeIndex, setActiveIndex ] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -30% 0px",
    delay: 250,
    triggerOnce: true
  });


  return (

    <Box mt={{sm: 2}}>
      <Box>
      <Box sx={{maxWidth: {xs: 400, sm: 600}, mx: "auto"}} ref={ref}>
        <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={activeIndex}>
          {processItems.map((item, index) => <Step key={item.title}>
            <StepLabel StepIconComponent={ColorlibStepIcon}  onClick={() => setActiveIndex(index)}>
            </StepLabel>
          </Step>)}
        </Stepper>
      </Box>
      <Carousel
        indicators={true}
        autoPlay={false}
        index={activeIndex}
        onChange={(e) => setActiveIndex(e)}
        navButtonsAlwaysInvisible={true}
        
      >
        {processItems.map(item => <Box 
          key={item.title} 
          sx={{
            pt:{xs:3, sm: 4},
            mx:{xs:2, sm:4},
            my:{xs:1, sm:1},
            minHeight: {xs: 160, sm:170},
          }}
        >
          <Fade appear={inView} in={inView} timeout={600}  style={{ transitionDelay: "300ms" }}>
            <Box>
              <Typography 
                variant="h2" 
                align="center" 
                fontWeight={500}
                sx={{
                  opacity: 1,
                  transition: "all 150ms linear",
                  textShadow: "1px 1px 7px rgba(125,125,125,.5)",
                  fontSize: { xs: 13.5, sm: 14 },
                  letterSpacing: 2.5,
                  textTransform: "uppercase",

                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Fade>
          <Fade appear={inView} in={inView} timeout={800}  style={{ transitionDelay: "500ms" }}>
            <Box>
              <Typography 
                variant="body1" 
                align='center'
                mt={{ xs: 3, sm: 4 }} 
                sx={{
                  transition: "all 400ms ease-in-out",
                  fontSize: { xs: 11, sm: 12.5 },
                  fontWeight: 300,
                  opacity: .6,
                  letterSpacing: .4,
                  lineHeight: 1.7,
                  textShadow: "1px 1px 7px rgba(75,75,75,.5)",
                }}
              >
                {item.body}
              </Typography>
            </Box>
          </Fade>
        </Box>)}
      </Carousel>
      </Box>
    </Box>
  )
}

export default ProcessStepperMobile