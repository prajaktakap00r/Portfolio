import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          height: "500px",
          margin: "auto",
          marginTop: 2,
          marginBottom: 2,
          backgroundColor: "transparent",
        }}
      >
        <img
          component="img"
          alt="prajaktaKapoor"
          height="450"
          width="400px"
          src="../src/images/coderGirl.svg"
          backgroundColor="white"
          style={{ display: "inline-block" }}
        />
        <Card
          sx={{
            width: "60%",
            margin: "auto",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            backgroundColor: "#140524",
            display: "inline",
          }}
        >
          Prajakta
        </Card>
        {/* <CardContent style={{}}>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Prajakta Kapoor
          </Typography>
          <Typography variant="body2" color="#FEFDED">
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
            sx={{ color: "#FEFDED" }}
          >
            Linkedin
            <LinkedInIcon
              sx={{
                display: { xs: "none", md: "flex", color: "#FEFDED" },
                mr: 1,
              }}
            />
          </Button>

          <Button
            href="https://GitHub.com/prajaktakap00r/"
            size="small"
            sx={{ color: "#FEFDED" }}
          >
            GitHub
            <GitHubIcon
              sx={{
                display: { xs: "none", md: "flex", color: "#FEFDED" },
                mr: 1,
              }}
            />
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
