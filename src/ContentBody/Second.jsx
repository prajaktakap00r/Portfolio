// Profile.jsx

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Projects from "./Projects";
import { Margin } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export default function Second() {
  return (
    <Card
      sx={{ maxWidth: 1600, height: 600, m: 2, overflow: "auto" }}
      style={{ backgroundColor: "#735DA5", marginBottom: "20px" }} // Added margin at the bottom
    >
      <h1 style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
        PROJECTS
      </h1>{" "}
      <Projects />
    </Card>
  );
}
