import * as React from "react";
import Card from "@mui/material/Card";
import img from "../images/coderGirl.svg";
export default function Profile() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(90deg, #cf90f3, #a851ea, #cf90f3, #a851ea)",
      }}
    >
      <Card
        sx={{
          width: "98%",
          margin: "auto",
          marginTop: 2,
          marginBottom: 2,
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <div
          id="core-concepts-left"
          style={{ display: "inline-block", margin: 10, padding: 10 }}
        >
          <h1>Prajakta Kapoor</h1>
          <h3>
            Passionate software developer, committed to writing clean,
            efficient, and dynamic code that makes a difference. Always
            learning, always growing, I'm excited to join a team that values
            innovation, creativity, and a commitment to excellence.
          </h3>
        </div>

        <img
          alt="prajaktaKapoor"
          height="550px"
          width="500px"
          src={img}
          style={{ display: "inline-block" }}
        />

        <div
          id="core-concepts-right"
          style={{ display: "inline-block", margin: 10, padding: 10 }}
        >
          <h1>Prajakta Kapoor</h1>
          <h3>
            Passionate software developer, committed to writing clean,
            efficient, and dynamic code that makes a difference. Always
            learning, always growing, I'm excited to join a team that values
            innovation, creativity, and a commitment to excellence.
          </h3>
        </div>
      </Card>
    </div>
  );
}
