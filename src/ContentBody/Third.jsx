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
      sx={{ maxWidth: 1600, height: 600, m: 2 }}
      style={{ backgroundColor: "#735DA5" }}
    >
      {/* <CardMedia
        component="img"
        alt="prajaktaKapoor"
        height="350"
        image="../src/images/img2.png"
      /> */}
      <h1 style={{ textAlign: "center", color: "white" }}>CONTACT ME</h1>
    </Card>
  );
}
