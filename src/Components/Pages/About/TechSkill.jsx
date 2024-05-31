import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiHtml5,
  DiCss3,
  DiJava,
} from "react-icons/di";
import {
  SiPhp,
  SiBootstrap,
  SiLaravel,
  SiMui,
} from "react-icons/si";
import { TbBrandReactNative  } from "react-icons/tb";
import useIntersectionObserver from '../../Layout/Intersection';

function TechSkill() {
  const observerRef = useIntersectionObserver('visible');

  const techSkills = [
    { icon: <DiHtml5 />, key: "html5" },
    { icon: <DiCss3 />, key: "css3" },
    { icon: <DiJavascript1 />, key: "js" },
    { icon: <DiReact />, key: "react" },
    { icon: <SiMui />, key: "mui" },
    { icon: <SiPhp />, key: "php" },
    { icon: <SiLaravel />, key: "laravel" },
    { icon: <DiPython />, key: "python" },
    { icon: <TbBrandReactNative />, key: "react-native" },
    { icon: <SiBootstrap />, key: "bootstrap" },
    { icon: <DiJava />, key: "java" },
  ];

  useEffect(() => {
    const icons = document.querySelectorAll('.tech-icons');
    icons.forEach(icon => observerRef.current.observe(icon));

    return () => {
      icons.forEach(icon => observerRef.current.unobserve(icon));
    };
  }, [observerRef]);

  return (
    <Grid container spacing={2} justifyContent="center" style={{ paddingBottom: "5%" }}>
      {techSkills.map(skill => (
        <Grid item xs={4} md={2} className="tech-icons" key={skill.key}>
          {skill.icon}
        </Grid>
      ))}
    </Grid>
  );
}

export default TechSkill;
