import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from 'three';
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from '@mui/material';
import TimeLine from '../timeline/timeline';
import {
  SiJavascript,
  SiHtml5,
  SiPython,
  SiDjango,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiCss3,
  SiTailwindcss
} from "react-icons/si";

const Home = () => {
  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({canvas});

    // Add moon in scene
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture});
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5)

    // Point light to the moon
    const moonPointLight = new THREE.PointLight(0xffffff, 50);
    const venusPointLight = new THREE.PointLight(0xffffff, 1);

    moonPointLight.position.set(8, 5, 5);
    venusPointLight.position.set(-8, -5, -5);

    // add planets and pointLight into scene.
    scene.add(moon);
    scene.add(venus);
    scene.add(moonPointLight);
    scene.add(venusPointLight);
    scene.background = spaceTexture;

    // planets movement according to cursor
    const constSpeed = 0.01; 
    window.addEventListener("mousemove", (e)=>{
      if(e.clientX <= window.innerWidth/2){
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if(e.clientX > window.innerWidth/2){
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if(e.clientY > window.innerWidth/2){
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if(e.clientY <= window.innerWidth/2){
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    })

    // animate the motion of planets
    const animate = () => {
      requestAnimationFrame(animate)
      moon.rotation.y += 0.002;
      venus.rotation.y += 0.002;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }
    animate();
  }, [])

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        {/* <Timeline timelines={[1, 2, 3, 4]}/> */}
        <TimeLine timelines = {[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant='h3'>SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/07/Python-web-framework-django.jpg" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png" alt="Face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://i.ytimg.com/vi/D60JxZYzEDc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbYhEjlyYj-zRYaXPQgKzEjoKALg" alt="Face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="Face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="https://i.pinimg.com/564x/90/3b/bb/903bbb31b5ae50326ae7d2eac38c9a33.jpg" alt="Face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png" alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">      
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiTailwindcss />
            <SiReact /> 
            <SiPython />
            <SiDjango />
            <SiMongodb />
            <SiPostman />
            <SiPostgresql />          
        </div>
      </div>
    </div>
  )
}

export default Home
