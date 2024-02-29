// Profile.jsx

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Projects from "./Projects";
import { Margin } from "@mui/icons-material";

export default function Second() {
  return (
    <Card
      sx={{ maxWidth: 1600, height: 600, m: 2, overflow: "auto" }}
      style={{ backgroundColor: "#735DA5", marginBottom: "20px" }} // Added margin at the bottom
    >
      <h1
        style={{ textAlign: "center", color: "white", marginTop: "20px" }}
      ></h1>{" "}
      {/* Added margin at the top */}
      <Projects />
    </Card>
  );
}
