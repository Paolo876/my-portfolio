import React from 'react'
import Image from 'mui-image'

const SkillIconImageItem = ({ src, height="100%", width="100%", objectFit="cover", duration=1500, bgColor="inherit"}) => {
  return (
    <Image 
      src={src} 
      height={height}
      width={width}
      fit={objectFit}
      duration={duration}
      bgColor={bgColor}
      sx={{filter: "grayscale(10%) contrast(90%)", "&:hover": {filter:"none"}}}
    />
  )
}

export default SkillIconImageItem