import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import 
{ 
    BsGithub,
    BsLinkedin
} from 'react-icons/bs'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
            Hey, my name is Abhay Kanwasi. I'm a Full-Stack Developer.
        </Typography>
        <Link to="/contacts" className="footerContactBtn">
            <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="" target="black">
            <BsGithub />
        </a>
        <a href="" target="black">
            <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Footer
