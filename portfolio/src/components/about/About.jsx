import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => { 
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://media.licdn.com/dms/image/C4D03AQF5Zgp2CzdE0Q/profile-displayphoto-shrink_800_800/0/1660896094364?e=1723680000&v=beta&t=gFEuZqcE1-mJsj3cS3MGNg_TQ-rCSvxJ_XQhYD7d144" alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
           Abhay Kanwasi
          </Typography>

          <Typography>Full Stack Developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            Software Engineer 
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "3px",
              lineHeight: "30px",
              letterSpacing: "0.2px",
              textAlign: "justify",
            }}
          >
            Hello there! Welcome to my profile. I'm Abhay Kanwasi, a passionate and results-driven Python Developer with expertise in Python Web Development. I am dedicated to solving complex problems and driving innovation through the application of cutting-edge technologies.
            Currently, I'm working at Hobbiate Technologies as Software Engineer
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;