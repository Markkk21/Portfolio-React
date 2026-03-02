import React, { useEffect, useRef } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import Typography from '@mui/material/Typography';
import useIntersectionObserver from '../../Layout/Transition';

export default function CustomizedTimeline() {
  const observerRef = useIntersectionObserver('visible');
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      observerRef.current.observe(timelineElement);
    }

    return () => {
      if (timelineElement) {
        observerRef.current.unobserve(timelineElement);
      }
    };
  }, [observerRef]);

  return (
    <div ref={timelineRef} className="queuevista-timeline">
      <Timeline position="alternate">   

        <Typography variant='h3' textAlign='center' >
         <strong>Experiences</strong>
        </Typography>

        {/* Current */}
        <TimelineItem >
          <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2">
          <Typography variant="h6" component="span">
              <strong id="lblYellow">Software Engineer</strong>
            </Typography>
            <Typography> Aurumax Tech Solutions Inc.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#d1ac00' }} />
            <TimelineDot>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="body" component="span">
              <strong id="lblYellow">May 2025 - March 2026 </strong>
            </Typography>
            <Typography>Developed and maintained mobile and web applications using Xamarin, C#, and ReactJS, with integrated Barcode and RFID support. 
                Enhanced UI/UX, supported Azure-based deployments, managed Google Play Store releases, and prepared technical documentation while conducting client system demonstrations.</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Pasts */}
        <TimelineItem > 
          <TimelineOppositeContent sx={{ m: 'auto 0', my: 4 }} variant="body2">
          <Typography variant="h6" component="span">
              <strong id="lblYellow">Junior Programmer</strong>
            </Typography>
            <Typography> Aurumax Tech Solutions Inc.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, my: 4}}>
          <Typography variant="body" component="span">
              <strong id="lblYellow">Aug 2024 - May 2025</strong>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Pasts */}
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2">
          <Typography variant="h6" component="span">
              <strong id="lblYellow">Web Developer Intern</strong>
            </Typography>
            <Typography> Aurumax Tech Solutions Inc.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector/>
            <TimelineDot>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="body" component="span">
              <strong id="lblYellow">Feb 2024 - June 2024 </strong>
            </Typography>
            <Typography>Assisted in designing and developing a responsive company web application using ReactJS and Material UI. 
                Implemented login functionality with form validation and contributed to UI design and prototyping using Figma.</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
