import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Projects from "./Projects";

export default function Profile() {
  return (
    <Card
      sx={{ maxWidth: 1600, height: 600, m: 2 }}
      style={{ backgroundColor: "#735DA5" }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>PROJECTS</h1>
      <Projects />
    </Card>
  );
}
