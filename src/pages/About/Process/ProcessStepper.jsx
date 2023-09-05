import { useState, useEffect } from 'react'
import { Step, StepLabel, Stepper, Typography, Fade } from '@mui/material'
import { ColorlibConnector, ColorlibStepIcon } from './stepperStyles'
import { useInView } from 'react-intersection-observer';


const ProcessStepper = ({ processItems }) => {
  const [ activeStep, setActiveStep ] = useState(0);
  const [ isHovered, setIsHovered ] = useState(false)
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0% 0px -30% 0px",
    delay: 250,
    triggerOnce: true
  });

  useEffect(() => {
    if(inView){
      const interval = setInterval(
        () => setActiveStep(prevState => {
          if(prevState === processItems.length - 1) {
            return 0
          } else {
            return prevState + 1
          }
        }), 6000)
      if(isHovered) clearInterval(interval) 
      return () => clearInterval(interval)    
    }
  }, [isHovered, inView])
  
  return (
    <Stepper alternativeLabel connector={<ColorlibConnector />} activeStep={activeStep} ref={ref}>
      {processItems.map((item, index) => 
        <Fade appear={inView} in={inView} timeout={1200}  style={{ transitionDelay: `${(index * 250) + 500}ms` }} key={item.name} >

        <Step 
          key={item.title} 
          onMouseOver={() => { setActiveStep(index); setIsHovered(true) }}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            }} 
        >
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <Typography 
              variant="h2" 
              align="center" 
              fontWeight={400}
              lineHeight={{xs:1}} 
              textTransform="none"
              mt={3}
              sx={{
                opacity: activeStep === index ? 1 : .75,
                transition: "all 150ms linear",
                textShadow: activeStep === index ? "1px 1px 7px rgba(125,125,125,.5)" : "1px 1px 7px rgba(25,25,25,.75)",
                fontSize: {
                  xs: activeStep === index ? 20.5 : 20, 
                  sm: activeStep === index ? 21.5 : 21, 
                  md: activeStep === index ? 22.5 : 22, 
                  lg: activeStep === index ? 23.5 : 23, 
                },
                letterSpacing: activeStep === index ? 1 : .5
              }}
            >{item.title}</Typography>
            <Typography 
              variant="body1" 
              px={{md: 1, lg:2.5, xl: 5}} 
              mt={{ md: 2, lg:3, xl: 4 }} 
              sx={{
                transition: "all 400ms ease-in-out",
                fontSize: { xs: 10, sm: 10.5, md: 11, lg:13, xl: 14 },
                fontWeight: 300,
                opacity: activeStep === index ? .7 : .45,
                transform: activeStep === index ? "scale(1.015)" : "scale(1)",
                letterSpacing: .3,
                textShadow: activeStep === index ? "1px 1px 7px rgba(75,75,75,.5)" : "1px 1px 7px rgba(10,10,10,.75)",
              }}
            >
              {item.body}
            </Typography>
          </StepLabel>
        </Step>
        </Fade>
      )}
    </Stepper>
  )
}

export default ProcessStepper