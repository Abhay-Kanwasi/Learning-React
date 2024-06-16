import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux";

export const ProjectCard = () => {
//   const dispatch = useDispatch();

//   const deleteHandler = async (id) => {
//     await dispatch(deleteProject(id));
//     dispatch(getUser());
//   };
const url = "";
const projectImage = "https://i.pinimg.com/564x/90/3b/bb/903bbb31b5ae50326ae7d2eac38c9a33.jpg";
const projectTitle = "wow";
const description = "wow ka desc";
const technologies = "Python";
// const isAdmin = false
// const id = "";

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {/* {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )} */}
    </>
  );
};

const Projects = ({ projects }) => {
    const url = "";
    const projectImage = "https://i.pinimg.com/564x/90/3b/bb/903bbb31b5ae50326ae7d2eac38c9a33.jpg";
    const projectTitle = "wow";
    const description = "wow ka desc";
    const technologies = "Python";
    return (
      <div className="projects">
        <Typography variant="h3">
          Projects <AiOutlineProject />
        </Typography>
      
        <div className="projectsWrapper">
        <a href={url} className="projectCard" target="black">
          <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
          </div>
        </a>
          {/* {projects.map((item) => (
            <ProjectCard
              id={item._id}
              key={item._id}
              url={item.url}
              projectImage={item.image.url}
              projectTitle={item.title}
              description={item.description}
              technologies={item.techStack}
            />
          ))} */}
        </div>

        <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
          All The Projects Shown Above Are Made By Me <FaRegSmileWink />
        </Typography>
      </div>
    );
};

export default Projects;