import React from 'react'
import { Paper } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import Image from 'mui-image';

const MyTimelineItem = ({children, dotColor="grey", dotIcon, endItem=false}) => {
  return (
    <TimelineItem sx={{minHeight: "34vh"}}>
      <TimelineSeparator>
        <TimelineConnector/>
        <TimelineDot color={dotColor} variant="filled" sx={{overflow: "hidden", color: "secondary.dark", my: 1.5}}>
          {dotIcon && <Image src={dotIcon} height="50px" width="50px" fit="cover"/>}
        </TimelineDot>
        <TimelineConnector sx={{visibility: endItem ? "hidden" : "initial"}}/>
      </TimelineSeparator>
      <TimelineContent sx={{ m: 'auto 0', py: "auto"}}>
        <Paper sx={{p:2.5, align: "right", mx:2 }} elevation={3}>
          {children}
        </Paper>
      </TimelineContent>
    </TimelineItem>

  )
}

export default MyTimelineItem