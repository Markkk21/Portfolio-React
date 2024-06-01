import React, { useEffect, useRef } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LoginIcon from '@mui/icons-material/Login';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import Typography from '@mui/material/Typography';
import useIntersectionObserver from '../../../Layout/Transition';

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
        <Typography textAlign="center" variant="h4">Process</Typography>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" id="lblYellow">
            QR Code
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#d1ac00' }} />
            <TimelineDot sx={{ bgcolor: 'transparent', border: "2px solid rgba(212, 175, 55, 0.637)" }}>
              <QrCodeScannerIcon/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              <strong id="lblYellow">1st</strong>
            </Typography>
            <Typography>Scan the QR code using mobile phone to access the website.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" id="lblYellow">
            Login/Register
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: 'transparent', border: "2px solid rgba(212, 175, 55, 0.637)" }}>
              <LoginIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              <strong id="lblYellow">2nd</strong>
            </Typography>
            <Typography>Create an account for a new student or log in for an existing student.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" id="lblYellow">
            QueueNumber
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: 'transparent', border: "2px solid rgba(212, 175, 55, 0.637)" }}>
              <FormatListNumberedIcon />
            </TimelineDot>
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              <strong id="lblYellow">3rd</strong>
            </Typography>
            <Typography>Select one or more offices and get a queue number. The system will display the number and alert user when it's their turn.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" id="lblYellow">
            Feedback
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector/>
            <TimelineDot sx={{ bgcolor: 'transparent', border: "2px solid green"}}>
              <AddReactionOutlinedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'green' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              <strong id="lblYellow">Last</strong>
            </Typography>
            <Typography>Once the transaction is complete, the user can rate their experience using the system!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
