import React, { useEffect } from "react";
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
import { TbBrandReactNative } from "react-icons/tb";
import useIntersectionObserver from '../../Layout/Transition';
import CustomGauge from '../../Layout/Gauge';

function TechSkill() {
  const observerRef = useIntersectionObserver('visible');

  const techSkills = [
    { icon: <DiHtml5 />, key: "html5", value: 80 },
    { icon: <DiCss3 />, key: "css3", value: 70 },
    { icon: <DiJavascript1 />, key: "js", value: 90 },
    { icon: <DiReact />, key: "react", value: 85 },
    { icon: <SiMui />, key: "mui", value: 60 },
    { icon: <SiPhp />, key: "php", value: 50 },
    { icon: <SiLaravel />, key: "laravel", value: 55 },
    { icon: <DiPython />, key: "python", value: 75 },
    { icon: <TbBrandReactNative />, key: "react-native", value: 65 },
    { icon: <SiBootstrap />, key: "bootstrap", value: 70 },
    { icon: <DiJava />, key: "java", value: 60 },
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
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {skill.icon}
              </div>
              <div className="flip-card-back">
                <CustomGauge value={skill.value} />
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default TechSkill;
