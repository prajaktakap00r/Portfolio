import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Profile() {
  return (
    <Card
      sx={{ maxWidth: 1600, height: 600, m: 2 }}
      style={{ backgroundColor: "#735DA5" }}
    >
      {/* <CardMedia
        component="img"
        alt="prajaktaKapoor"
        height="350"
        image="../src/images/img2.png"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Prajakta Kapoor
        </Typography>
        <Typography variant="body2" color="white">
          Passionate software developer, committed to writing clean, efficient,
          and dynamic code that makes a difference. Always learning, always
          growing, I'm excited to join a team that values innovation,
          creativity, and a commitment to excellence.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://linkedin.com/in/prajaktakap00r/" size="small">
          Linkedin
        </Button>
        <Button href="https://GitHub.com/prajaktakap00r/" size="small">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
