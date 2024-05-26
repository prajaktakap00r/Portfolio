import SkillBar from "react-skillbars";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import "../index.css";
export default function MySkills() {
  const theme = useTheme();

  const skills = [
    { type: "C++", level: 90 },
    { type: "DSA", level: 70 },
    { type: "REACT", level: 80 },
    { type: "MERN", level: 70 },
    { type: "CSS", level: 85 },
    { type: "HTML", level: 90 },
    { type: "ML", level: 70 },
  ];

  const colors = {
    bar: "#00B0FF",
    title: {
      text: "#fff",
      background: "#140524",
    },
  };

  const colors1 = {
    bar: "#00B0FF",
    title: {
      text: "#fff",
      background: "#140524",
    },
  };

  return (
    <Card
      sx={{
        width: "98%",
        margin: "auto",
        marginTop: 2,
        marginBottom: 2,

        background: "transparent",
        //backgroundColor: "#140524",
        backgroundColor:
          "linear-gradient(90deg, #cf90f3, #a851ea, #cf90f3, #a851ea)",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="#140524"
          style={{ textAlign: "center" }}
        >
          My Skills
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <SkillBar
              skills={skills}
              colors={colors}
              className="custom-skillbar"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
