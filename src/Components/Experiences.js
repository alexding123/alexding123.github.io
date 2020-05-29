import React, { Component } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
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
                { experience.publication_name ? <li key={"writeup"}>{`${experience.publication_type}: `} 
                  {
                    experience.publication_link ? 
                      <a href={experience.publication_link}>{experience.publication_name}</a> :
                      experience.publication_name
                  }</li> : null }
              </ul>
                
              <div className="entry-icons d-flex flex-row">
              { experience.github_link ? 
                <OverlayTrigger
                  overlay={<Tooltip>GitHub repository</Tooltip>}
                >
                  <Button href={experience.github_link} variant="link">
                    <img alt="github" src={github} className="icon"/>
                  </Button>
                </OverlayTrigger>
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