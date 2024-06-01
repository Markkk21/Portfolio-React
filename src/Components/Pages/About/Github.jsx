import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Grid, Typography } from "@mui/material";
import useIntersectionObserver from '../../Layout/Transition';

function Github() {
  const observerRef = useIntersectionObserver('visible');

  useEffect(() => {
    const calendar = document.querySelector('.github-calendar');
    observerRef.current.observe(calendar);

    return () => {
      observerRef.current.unobserve(calendar);
    };
  }, [observerRef]);

  return (
    <Grid container justifyContent="center" sx={{ paddingBottom: "5%" }}>
      <Typography
        variant="h3"
        sx={{ paddingBottom: "20px", textAlign: { xs: "center" } }}
      >
        My Github <strong id="lblYellow">Calendar</strong>
      </Typography>
      <div className="github-calendar">
        <GitHubCalendar
          username="Markkk21"
          blockSize={15}
          blockMargin={5}
          color="white"
          fontSize={16}
        />
      </div>
    </Grid>
  );
}

export default Github;
