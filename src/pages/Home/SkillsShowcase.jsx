import React from 'react'
import { Box, Typography } from '@mui/material'
import javascript from "../../assets/icons/javascript.svg"
import react from "../../assets/icons/react.svg"
import nextjs from "../../assets/icons/nextjs.svg"
import redux from "../../assets/icons/redux.svg"
import SkillIconImageItem from '../../components/SkillIconImageItem'

const skillsIcons = {
    frontend: [
        {src: javascript, name: "JavaScript"},
        {src: react, name: "React"},
        {src: nextjs, name: "Next"},
        {src: redux, name: "Redux"},
    ]
}

const SkillsShowcase = () => {
  return (
    <Box>
        <Box sx={{display: "flex", flexDirection: "row", gap: 1.5}}>
            {skillsIcons.frontend.map(item => 
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <SkillIconImageItem src={item.src} height="30px" width="30px" duration="800"/>
                <Typography variant="body2" sx={{mixBlendMode: "difference", fontSize: 12, fontWeight: 200, mt: .5}}>{item.name}</Typography>
            </Box>
            )}

        </Box>
    </Box>
  )
}

export default SkillsShowcase