import React, { Component } from "react";
import classes from "../jsons/classes.json";
import github from "../imgs/github.svg";
import certificate from "../imgs/certificate.svg";
import course from "../imgs/course.svg";

export default class ClassesComponent extends Component {
  getClasses() {
    return (
      <div className="classes-container text-block">
        {classes.map((class_info, idx) => {
          return (
          <div className="card" key={idx}> 
            <div className="card-header">
              <p className="class-info-title card-header-title">{class_info.name}</p>
            </div>
            
            <div className="card-footer">
              {class_info.github_link ? 
              <a className="card-footer-item" href={class_info.github_link} target="_blank" rel="noopener noreferrer"><img alt="github" className="icon-small" src={github}/></a> :
              null}
              {class_info.certificate_link ? 
              <a className="card-footer-item" href={class_info.certificate_link} target="_blank" rel="noopener noreferrer"><img alt="certificate" className="icon-small" src={certificate}/></a> :
              null}
              {class_info.course_link ? 
              <a className="card-footer-item" href={class_info.course_link} target="_blank" rel="noopener noreferrer"><img alt="course" className="icon-small" src={course}/></a> :
              null}
            </div>
          </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="classes-container" id="classes">
        <div className="classes-title title">
          Online Classes
        </div>
        <div className="classes-container section">
          {this.getClasses()}
        </div>
      </div>
    );
  }
}