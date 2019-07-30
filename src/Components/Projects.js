import React, { Component } from "react";
import projects from "../jsons/projects.json";
import github from "../imgs/github.svg";
import demo from "../imgs/demo.svg";

export default class ProjectsComponent extends Component {
  getProjects() {
    return (
      <div className="card-container text-block">
      {projects.map((project, idx) => 
        <div className="card" key={idx}> 
        <header className="card-header">
          <p className="card-header-title">{project.title}</p>
        </header>
        <div className="card-content">
          {project.image_link ? 
            <img className="card-img" src={project.image_link} alt={project.title}/> :
            null}
          
          <div className="card-description">{project.description}</div>
        </div>
        <footer className="card-footer">
          {project.github_link ? 
          <a className="card-footer-item" href={project.github_link} target="_blank" rel="noopener noreferrer"><img alt="github" className="icon" src={github}/></a> :
          null}

          {project.demo_link ? 
          <a className="card-footer-item" href={project.demo_link} target="_blank" rel="noopener noreferrer"><img alt="demo" className="icon" src={demo}/></a> :
          null}
        </footer>
      </div>
      )}
      </div>
    )
  }
  render() {
    return (
      <div className="project-container" id="projects">
        <div className="title project-title">
          Projects
        </div>
        <div className="project-section section">
        {this.getProjects()}
        </div>
      </div>
    )
  }
}