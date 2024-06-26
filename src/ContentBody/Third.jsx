import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./Card.css";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Card
      sx={{
        width: "98%",
        margin: "auto",
        marginTop: 2,
        marginBottom: 2,
        background: "transparent",
        boxShadow: "none",
        backgroundColor:
          "linear-gradient(90deg, #cf90f3, #a851ea, #cf90f3, #a851ea)",
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
          Contact Me
        </Typography>
        <div className="contact-card" style={{ backgroundColor: " #140524" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ color: "white" }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ backgroundColor: "white" }}
            />

            <label htmlFor="email" style={{ color: "white" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: "white" }}
            />

            <label htmlFor="message" style={{ color: "white" }}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              style={{ backgroundColor: "white" }}
            ></textarea>

            <button type="submit" style={{ backgroundColor: "#00B0FF" }}>
              Submit
            </button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
