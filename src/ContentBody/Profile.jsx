import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MySkills from "./Skills";

export default function Profile() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Card
        sx={{ maxWidth: 345, m: 2, ml: 4.5, display: "inline-block" }}
        style={{ backgroundColor: "#735DA5", scrollBehavior: "smooth" }}
      >
        <CardMedia
          component="img"
          alt="prajaktaKapoor"
          height="350"
          image="../src/images/img2.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Prajakta Kapoor
          </Typography>
          <Typography variant="body2" color="#D3C5E5">
            Passionate software developer, committed to writing clean,
            efficient, and dynamic code that makes a difference. Always
            learning, always growing, I'm excited to join a team that values
            innovation, creativity, and a commitment to excellence.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            href="https://linkedin.com/in/prajaktakap00r/"
            size="small"
            sx={{ color: "white" }}
          >
            Linkedin
            <LinkedInIcon
              sx={{
                display: { xs: "none", md: "flex", color: "#D3C5E5" },
                mr: 1,
              }}
            />
          </Button>

          <Button
            href="https://GitHub.com/prajaktakap00r/"
            size="small"
            sx={{ color: "white" }}
          >
            GitHub
            <GitHubIcon
              sx={{
                display: { xs: "none", md: "flex", color: "#D3C5E5" },
                mr: 1,
              }}
            />
          </Button>
        </CardActions>
      </Card>
      <MySkills />
    </div>
  );
}
