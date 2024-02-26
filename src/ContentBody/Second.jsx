import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Profile() {
  return (
    <Card
      sx={{
        maxWidth: 1520,
        height: 700,
        m: 2,
        paddingTop: 2,
        zIndex: 3,
      }}
      style={{ backgroundColor: "#735DA5" }}
    >
      <h1 style={{ color: "White", textAlign: "center" }}>PROJECTS</h1>
      <Card
        sx={{
          maxWidth: 500,
          height: 250,
          m: 2,

          zIndex: 1,
          display: "inline-block",
        }}
        style={{ backgroundColor: "#D3C5E5", width: 466 }}
      >
        A
      </Card>
      <Card
        sx={{
          maxWidth: 500,
          height: 250,
          m: 2,
          zIndex: 1,
          display: "inline-block",
        }}
        style={{ backgroundColor: "#D3C5E5", width: 466 }}
      >
        B
      </Card>
      <Card
        sx={{
          maxWidth: 500,
          height: 250,
          m: 2,
          zIndex: 1,
          display: "inline-block",
        }}
        style={{ backgroundColor: "#D3C5E5", width: 485 }}
      >
        A
      </Card>
      <Card
        sx={{
          maxWidth: 500,
          height: 250,
          m: 2,
          zIndex: 1,
          display: "inline-block",
        }}
        style={{ backgroundColor: "#D3C5E5", width: 466 }}
      >
        B
      </Card>
      <Card
        sx={{
          maxWidth: 500,
          height: 250,
          m: 2,
          zIndex: 1,
          display: "inline-block",
        }}
        style={{ backgroundColor: "#D3C5E5", width: 466 }}
      >
        A
      </Card>
      <Card
        sx={{
          maxWidth: 500,
          height: 250,
          m: 2,
          zIndex: 1,
          display: "inline-block",
        }}
        style={{ backgroundColor: "#D3C5E5", width: 485 }}
      >
        B
      </Card>
    </Card>
  );
}
