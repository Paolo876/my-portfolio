import React from 'react'
import { Paper } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

const MyTimelineItem = ({children, dotColor="grey", dotIcon}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
      <TimelineDot color={dotColor}>
        {dotIcon}
      </TimelineDot>
      <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{py: 5}}>
        <Paper sx={{p:2, align: "right", m:2}}>
          {children}
        </Paper>
      </TimelineContent>
    </TimelineItem>

  )
}

export default MyTimelineItem