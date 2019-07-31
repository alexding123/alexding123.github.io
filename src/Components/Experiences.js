import React, { Component } from "react";
import EmbedVideoComponent from "./EmbedVideo";
import experiences from "../jsons/experiences.json";


import github from "../imgs/github.svg";

export default class ExperiencesComponent extends Component {
  getExperiences() {
    return (
      <div className="timeline">
        {experiences.map((experience, idx) =>
          <div className="entry" key={idx}>
            <div className="entry-title">
              <h3>{experience.time}</h3>
              <p><a href={experience.link}>{experience.location}</a></p>
            </div>
            <div className="entry-body">
              <p>{experience.position}</p>
              <ul>
                {experience.details.map((detail, id) => 
                  <li key={id}>{detail}</li>
                )}
              </ul>
                
              <div className="entry-icons">
              { experience.github_link ? 
                <a href={experience.github_link} target="_blank" rel="noopener noreferrer">
                  <img alt="github" src={github} className="icon"/>
                </a>
              : null
              }
              { experience.video_link ? 
                <EmbedVideoComponent link={experience.video_link}/>
                : null
              }
              </div>
            </div>
          </div>
        )}
      </div>
  
    );
  }

  render() {
    return (
      <div className="experiences-container" id="experiences">
        <div className="experiences-title title">
          Experiences
        </div>
        <div className="timeline-container section">
          {this.getExperiences()}
        </div>
      </div>
    );
  }
}