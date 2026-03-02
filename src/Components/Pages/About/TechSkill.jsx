import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import { 
  TbBrandXamarin,
  TbBrandCSharp } from "react-icons/tb";
import {
  SiPhp,
  SiBootstrap,
  SiLaravel,
  SiMui,
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";

import useIntersectionObserver from '../../Layout/Transition';
import CustomGauge from '../../Layout/Gauge';

function TechSkill() {
  const observerRef = useIntersectionObserver('visible');

  const techSkills = [
    { icon: <TbBrandCSharp />, key: "c#", value: 50 },
    { icon: <TbBrandXamarin />, key: "xamarin", value: 50 },
    { icon: <AiOutlineDotNet />, key: ".net", value: 50 },
    { icon: <DiJavascript1 />, key: "js", value: 50 },
    { icon: <DiReact />, key: "react", value: 50 },
    { icon: <SiMui />, key: "mui", value: 50 },
    { icon: <SiBootstrap />, key: "bootstrap", value: 40 },
    { icon: <SiPhp />, key: "php", value: 20 },
    { icon: <SiLaravel />, key: "laravel", value: 20 },
    { icon: <DiPython />, key: "python", value: 20 },
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
          <Grid className="flip-card">
            <Grid className="flip-card-inner">
              <Grid className="flip-card-front">
                {skill.icon}
              </Grid>
              <Grid className="flip-card-back">
                <CustomGauge value={skill.value} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default TechSkill;
