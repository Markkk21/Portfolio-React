import React, { useEffect} from "react";
import Grid from "@mui/material/Grid";

import {
  SiMui ,
  SiReact ,
  SiVisualstudiocode,
  SiFigma,
  SiMysql
} from "react-icons/si";
import { BiRfid } from "react-icons/bi";
import { CiBarcode } from "react-icons/ci";
import { 
  TbBrandXamarin,
  TbBrandCSharp,
  TbSdk } from "react-icons/tb";
import useIntersectionObserver from '../../../Layout/Transition';

function DevTools() {
  const observerRef = useIntersectionObserver('visible');

  const techSkills = [
    { icon: <TbBrandCSharp />, key: "c#"},
    { icon: <SiReact  />, key: "reactjs" },
    { icon: <SiMui />, key: "mui" },
    { icon: <TbBrandXamarin />, key: "xamarin"},
    { icon: <SiVisualstudiocode />, key: "vscode" },
    { icon: <TbSdk />, key: "sdk" },
    { icon: <BiRfid />, key: "rfid" },
    { icon: <CiBarcode />, key: "barcode" },
    { icon: <SiFigma />, key: "figma" },
    { icon: <SiMysql />, key: "mysql" },
  ];


  useEffect(() => {
    const icons = document.querySelectorAll('.tech-icons');
    const observer = observerRef.current;
  
    if (observer) {
      icons.forEach(icon => observer.observe(icon));
    }
  
    return () => {
      if (observer) {
        icons.forEach(icon => observer.unobserve(icon));
      }
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
