// Projects.jsx

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/system";
import { CardContent, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import { Height } from "@mui/icons-material";

export default function Projects() {
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
          Projects
        </Typography>
        <ImageList sx={{ width: "100%", ml: 2 }} cols={4} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} style={{ margin: "30px" }}>
              {" "}
              {/* Added margin between each project */}
              <img
                style={{ height: "250px" }}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ color: "white" }}
                title={item.title}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  );
}

// Your itemData array remains unchanged...

const itemData = [
  {
    img: "https://www.pngitem.com/pimgs/m/204-2042934_network-collection-of-free-illustration-of-social-media.png",
    title: "Social Network",
  },
  {
    img: "https://png.pngtree.com/png-clipart/20230925/original/pngtree-comicstyle-todo-list-cartoon-icon-on-white-background-vector-png-image_12861737.png",
    title: "WhatToDo",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/004/462/252/original/modern-heart-medication-heart-disease-research-concept-cardiologist-studying-big-heart-model-drugs-and-heartbeat-diagram-illustration-cardiovascular-system-cardiology-medical-examination-vector.jpg",
    title: "Heart Disease Prediction Model",
    author: "@helloimnik",
  },
  {
    img: "https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-plant-flower-branch-purple-flowers-illustration-png-image_439846.jpg",
    title: "GuRePe",
    author: "@nolanissac",
  },
  {
    img: "https://sendgrid.com/content/dam/sendgrid/legacy/2021/09/Untitled-design-53.png",
    title: "Email Template",
    author: "@hjrc33",
  },
  {
    img: "https://thumbs.dreamstime.com/b/restaurant-building-flat-design-architecture-facade-food-cafe-construction-vector-illustration-69417405.jpg",
    title: "Restaurant App",
    author: "@arwinneil",
  },
  {
    img: "https://p7.hiclipart.com/preview/833/721/133/calculator-clip-art-calculator.jpg",
    title: "SGPA Calculator",
    author: "@tjdragotta",
  },
  {
    img: "https://www.pngitem.com/pimgs/m/17-170452_taxi-hire-website-design-web-design-illustration-png.png",
    title: "Portfolio",
    author: "@katie_wasserman",
  },
];
