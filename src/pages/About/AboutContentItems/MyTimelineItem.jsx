import React from 'react'
import { Box, Paper } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import SkillIconImageItem from '../../../components/SkillIconImageItem';

const MyTimelineItem = ({children, dotColor="grey", dotIcon, endItem=false, firstItem=false}) => {
  return (
    <TimelineItem sx={{minHeight: 320}}>
      <TimelineSeparator>
        {/* <TimelineConnector sx={{visibility: firstItem ? "hidden" : "initial"}}/> */}
        <TimelineDot color={dotColor} variant="filled" sx={{overflow: "hidden", color: "secondary.dark", p: .5}}>
          {dotIcon && <SkillIconImageItem src={dotIcon} height="32px" width="32px" fit="cover"/>}
        </TimelineDot>
        <TimelineConnector sx={{visibility: endItem ? "hidden" : "initial"}}/>
      </TimelineSeparator>
      <TimelineContent sx={{ mb: 'auto'}}>
          {children}
      </TimelineContent>
    </TimelineItem>

  )
}

export default MyTimelineItem