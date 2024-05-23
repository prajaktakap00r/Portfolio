import SkillBar from "react-skillbars";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import Grid from "@mui/material/Grid";

export default function MySkills() {
  const theme = useTheme();

  const skills = [
    { type: "C++", level: 90 },
    { type: "DSA", level: 70 },
    { type: "MERN", level: 60 },
    { type: "CSS", level: 85 },
    { type: "HTML", level: 90 },
    { type: "ML", level: 70 },
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
        width: "90%",
        margin: "auto",
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: "#735DA5",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="white"
          style={{ textAlign: "center" }}
        >
          My Skills
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h6" component="div" color="white">
              Technical Skills
            </Typography>
            <SkillBar
              skills={skills}
              colors={colors}
              className="custom-skillbar"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom variant="h6" component="div" color="white">
              Interpersonal Skills
            </Typography>
            <SkillBar
              skills={skills1}
              colors={colors1}
              className="custom-skillbar"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
