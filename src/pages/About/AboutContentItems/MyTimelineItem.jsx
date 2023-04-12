import React from 'react'
import { Paper } from '@mui/material';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';

const MyTimelineItem = ({children, dotColor="grey", dotIcon, endItem=false}) => {
  return (
    <TimelineItem >
      <TimelineSeparator>
      <TimelineDot color={dotColor} variant="outlined">
        {dotIcon}
      </TimelineDot>
      {!endItem && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ m: 'auto 0', pb: 10}}>
        <Paper sx={{p:2, align: "right", mx:2 }} >
          {children}
        </Paper>
      </TimelineContent>
    </TimelineItem>

  )
}

export default MyTimelineItem