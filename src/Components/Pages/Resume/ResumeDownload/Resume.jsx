import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Switch, Button, colors } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { TbEyeClosed, TbEye } from "react-icons/tb";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../ResumeDownload/Mark_Joshua_Garcia_Resume.pdf"; // File Directory

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfVisible, setPdfVisible] = useState(false); // Initially set to false

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.setAttribute("download", "Garcia_MarkJoshua_Resume.pdf"); // Filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const togglePdfVisibility = () => {
    setPdfVisible(!pdfVisible);

  };

  return (
    <Container fluid id="resumeContainer">
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <Button
            id="btnResume"
            variant="contained"
            onClick={handleDownload}
            startIcon={<AiOutlineDownload />}
          >
            Download Résumé
          </Button>
        </Grid>
        <Grid item>
          <Switch
            className="switchResume"
            checked={pdfVisible}
            onChange={togglePdfVisibility}
            icon={<TbEye />}
            checkedIcon={<TbEyeClosed />}
            color="default"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          id="resumeView"
          style={{ height: pdfVisible ? "auto" : "0", overflow: "hidden" }}
        >
          {pdfVisible && (
            <Document file={pdf}>
              <Page
                pageNumber={1}
                renderTextLayer={false}
                scale={width > 786 ? 1.7 : 0.6}
              />
            </Document>
          )}
        </Box>
      </Grid>
    </Container>
  );
}

export default ResumeNew;
