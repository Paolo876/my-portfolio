import React from 'react'
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import SkillIconImageItem from '../../../components/SkillIconImageItem';

const MyTimelineItem = ({children, dotColor="grey", dotIcon, endItem=false, firstItem=false}) => {
  return (
    <TimelineItem sx={{minHeight: endItem ? 0 : "initial"}}>
      <TimelineSeparator>
        <TimelineDot color={dotColor} variant="filled" sx={{overflow: "hidden", color: "secondary.dark", p: .5}}>
          {dotIcon && <SkillIconImageItem src={dotIcon} height={25} width={25} fit="cover"/>}
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