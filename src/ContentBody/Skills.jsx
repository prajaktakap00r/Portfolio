import SkillBar from "react-skillbars";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export default function MySkills() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const skills = [
    { type: "C++", level: 90 },
    { type: "React", level: 85 },
    { type: "ReactNative", level: 20 },
    { type: "CSS", level: 85 },
    { type: "HTML", level: 90 },
    { type: "MongoDB", level: 30 },
  ];

  const skills1 = [
    { type: "Leadership", level: 90 },
    { type: "Presentation", level: 85 },
  ];

  const colors = {
    bar: "#D3C5E5",
    title: {
      text: "#fff",
      background: "#D4C5E5",
    },
  };

  const colors1 = {
    bar: "#D3C5E5",
    title: {
      text: "#fff",
      background: "#D4C5E5",
    },
  };

  return (
    <Card
      sx={{
        maxWidth: isSmallScreen ? "100%" : 1175,
        height: isSmallScreen ? "auto" : 587,
        m: 2,
        mr: 1,
        display: "inline-block",
      }}
      style={{ backgroundColor: "#735DA5" }}
    >
      <CardContent sx={{ width: isSmallScreen ? "100%" : 1105 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          style={{ textAlign: "center" }}
        >
          My Skills
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color="white">
          Technical Skills
        </Typography>

        <SkillBar
          skills={skills}
          colors={colors}
          className="custom-skillbar"
          style={{ width: "100%", marginLeft: isSmallScreen ? "0" : "-20px" }}
        />

        <Typography gutterBottom variant="h6" component="div" color="white">
          Interpersonal Skills
        </Typography>
        <SkillBar
          skills={skills1}
          colors={colors1}
          className="custom-skillbar"
          style={{ width: "100%" }}
        />
      </CardContent>
    </Card>
  );
}
