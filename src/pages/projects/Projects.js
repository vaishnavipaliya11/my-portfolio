import React from "react";
import { FaFolder } from "react-icons/fa";
import csslibrary from "./productimg/csslibrary.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import "./projects.css";
const Projects = () => {
  document.title = "Projects";
  return (
    <div>
      <div className="projects-main">
        <div>
          <h1 id="title"> My Noteworthy Projects</h1>
        </div>
        <div className="projects-card-container">
          <div class="project-card">
            <div class="project-tumb">
              <img src={csslibrary} alt="" />
            </div>
            <div class="project-details">
              <h3 className="project-title">Css-Library</h3>
              <p>
                A set of small, responsive CSS modules that you can use in every
                web project.
              </p>
              <div class="project-bottom-details">
                <div class="project-price">
                  <small>Pure-Css</small>
                </div>
                <div class="project-links">
                  <a href="https://github.com/vaishnavipaliya11/Component-Library-infinite-ui" target="_blank">
                    <FiGithub className="icon" />
                  </a>
                  <a href="https://infinitee-ui.netlify.app/" target="_blank">
                    <FiExternalLink className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export { Projects };
