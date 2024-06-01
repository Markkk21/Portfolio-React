import * as React from 'react';
import { Timeline, 
    TimelineItem, 
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
    } from '@mui/lab';

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LoginIcon from '@mui/icons-material/Login';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
    <Typography textAlign="center" variant="h4">Process</Typography>
      <TimelineItem>
        
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          id="lblYellow"
        >
            QR Code
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: 'transparent', border: "2px solid rgba(212, 175, 55, 0.637)" }}>
            <QrCodeScannerIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
                <strong id="lblYellow">1st</strong>
          </Typography>
          <Typography>Scan the QR code using your mobile phone to access the website.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          id="lblYellow"
        >
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
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          id="lblYellow"
        >
          QueueNumber
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: 'transparent', border: "2px solid rgba(212, 175, 55, 0.637)" }}>
            <FormatListNumberedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
                <strong id="lblYellow">3rd</strong>
          </Typography>
          <Typography>Select one or more offices and get a queue number. The system will display your number and alert you when it's your turn.</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          id="lblYellow"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
