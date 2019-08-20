import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import projects from "../jsons/projects.json";
import github from "../imgs/github.svg";
import demo from "../imgs/demo.svg";

export default class ProjectsComponent extends Component {
  getProjects() {
    return (
      <div className="card-container text-block">
      {projects.map((project, idx) => 
        <CardComponent project={project} idx={idx}/>
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

class CardComponent extends Component {
  state = {
    hover: false
  }
  render() {
    const {project, idx} = this.props;
    return (
      <div className="card" key={idx} onMouseEnter={() => this.setState({hover:true})} onMouseLeave={() => this.setState({hover:false})}> 
        <header className="card-header">
          <p className="card-header-title">{project.title}</p>
        </header>
        <div className="card-content">
          {project.image_link ? 
            <img className="card-img" src={project.image_link} alt={project.title}/> :
            null}
          
          <div className="card-description">
            {project.description}
            {project.demo_link ? <div><br></br>Checkout the demo using the console button below!</div>: null}
          </div>
        </div>
        <footer className="card-footer">

          {project.github_link ? 
          <Tooltip title="GitHub Repo"><a className="card-footer-item" href={project.github_link} target="_blank" rel="noopener noreferrer" onMouseEnter={() => this.setState({github_link_hover:true})} onMouseLeave={() => this.setState({github_link_hover:false})}><img alt="github" className="icon" src={github}/></a></Tooltip> :
          null}

          {project.demo_link ? 
          <Tooltip title="Demo" open={this.state.hover && !this.state.github_link_hover}><a className="card-footer-item" href={project.demo_link} target="_blank" rel="noopener noreferrer"><img alt="demo" className="icon" src={demo}/></a></Tooltip> :
          null}
        </footer>
      </div>
    )
  }
}