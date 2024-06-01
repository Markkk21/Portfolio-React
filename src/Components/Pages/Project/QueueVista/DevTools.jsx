import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import {
  DiJavascript1,
} from "react-icons/di";
import {
  SiPhp,
  SiBootstrap,
  SiLaravel,
  SiMysql,
  SiVisualstudiocode,
} from "react-icons/si";
import useIntersectionObserver from '../../../Layout/Transition';

function DevTools() {
  const observerRef = useIntersectionObserver('visible');

  const techSkills = [
    { icon: <DiJavascript1 />, key: "js" },
    { icon: <SiPhp />, key: "php" },
    { icon: <SiLaravel />, key: "laravel" },
    { icon: <SiBootstrap />, key: "bootstrap" },
    { icon: <SiMysql />, key: "mysql" },
    { icon: <SiVisualstudiocode />, key: "vscode" },
  ];

  useEffect(() => {
    const icons = document.querySelectorAll('.tech-icons');
    icons.forEach(icon => observerRef.current.observe(icon));

    return () => {
      icons.forEach(icon => observerRef.current.unobserve(icon));
    };
  }, [observerRef]);

  return (
    <Grid container justifyContent="center" style={{ paddingBottom: "5%" }}>
      {techSkills.map(skill => (
        <Grid item xs={4} md={1} className="tech-icons" key={skill.key}>
          {skill.icon}
        </Grid>
      ))}
    </Grid>
  );
}

export default DevTools;
