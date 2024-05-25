// Projects.jsx

import * as React from "react";
import { CardContent, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import SN from "../images/SN.png";
import todo from "../images/Todo.png";
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default function Projects() {
  return (
    <Card
      sx={{
        width: "98%",
        margin: "auto",
        marginTop: 2,
        marginBottom: 2,
        background: "radial-gradient(circle, #280a48, #20043d)",
      }}
    >
      <CardContent>
        <div>
          <main>
            <section id="core-concepts">
              <h2>Projects</h2>
              <ul>
                <CoreConcept
                  title={itemData[0].title}
                  image={itemData[0].img}
                />
                <CoreConcept {...itemData[1]} />
                <CoreConcept {...itemData[2]} />
                <CoreConcept {...itemData[3]} />
                <CoreConcept {...itemData[4]} />
                <CoreConcept {...itemData[5]} />
                <CoreConcept {...itemData[6]} />
                <CoreConcept {...itemData[7]} />
              </ul>
            </section>
          </main>
        </div>
      </CardContent>
    </Card>
  );
}

// Your itemData array remains unchanged...

const itemData = [
  {
    img: SN,
    title: "Social Network",
  },
  {
    img: todo,
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
