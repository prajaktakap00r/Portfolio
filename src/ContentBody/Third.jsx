import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
        backgroundColor: "#A1C398",
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
          Contact Me
        </Typography>
        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
