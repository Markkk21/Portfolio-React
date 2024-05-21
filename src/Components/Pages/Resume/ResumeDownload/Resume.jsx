import React from 'react';

import { IconButton, Typography } from '@mui/material';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ResumeFile = () => {
  const pdfUrl = 'https://drive.google.com/uc?id=1q537qVdlk4gR01YWRY2BiIVancfL8Fs4&export=download'; // Replace with your Google Drive PDF link

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'MarkJoshuaGarcia_Resume.pdf'); // Change to your preferred file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <IconButton onClick={handleDownload} sx={{ color: "white", margin: ".5vh" }}>
        <CloudDownloadIcon fontSize="large" />
        <Typography variant="subtitle2" sx={{ color: "white", ml: ".5vh" }}>Download Résumé</Typography>
      </IconButton>
    </div>
  );
};

export default ResumeFile;
