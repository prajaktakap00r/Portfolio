// Projects.jsx

import * as React from "react";
import { CardContent, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import SN from "../images/social.svg";
import TODO from "../images/todo.svg";
import Heart from "../images/heart.svg";
import calculator from "../images/calculator.svg";
import wedding from "../images/gurepe.svg";
import email from "../images/email.svg";
import restaurant from "../images/restaurant.svg";
import portfolio from "../images/portfolio.svg";
const itemData = [
  {
    img: SN,
    title: "Social Network",
  },
  {
    img: TODO,
    title: "WhatToDo",
  },
  {
    img: Heart,
    title: "Heart Disease Prediction Model",
  },
  {
    img: wedding,
    title: "GuRePe",
  },
  {
    img: email,
    title: "Email Template",
  },
  {
    img: restaurant,
    title: "Restaurant App",
  },
  {
    img: calculator,
    title: "SGPA Calculator",
  },
  {
    img: portfolio,
    title: "Portfolio",
  },
];

function CoreConcept({ img, title }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
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

        backgroundColor: "#140524",
        //backgroundColor:
        //"linear-gradient(90deg, #cf90f3, #a851ea, #cf90f3, #a851ea)",
        boxShadow: "none",
      }}
    >
      <div>
        <main>
          <section id="core-concepts">
            <h2>Projects</h2>
            <ul>
              <CoreConcept title={itemData[0].title} img={itemData[0].img} />
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
    </Card>
  );
}
