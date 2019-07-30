import React, { Component } from "react";
import skills from "../jsons/skills.json";

export default class SkillsComponent extends Component {
  getSkills() {
    return (
      <div>
        {skills.map((skill_set, idx) => 
          <div key={idx}> 
            <span className="skill-name">{skill_set.name}</span>
            <br></br><br></br>
            <div className="skillset-container">
              {skill_set.members.map((member, id) => 
                <div className="skill-container" key={id}>
                  {member.icon ? 
                  <i className={member.icon}></i> : 
                  <img className="skill" alt={member.name} src={member.img_url}></img>
                  }
                </div>
              )}
              
            </div>
            <br></br>
          </div>
        )}
      </div>
    );
  }
  render() {
    return (
      <div className="skills-container" id="skills">
        <div className="skills-title title">
          Skills
        </div>
        <div className="skills-container section">
          {this.getSkills()}
        </div>
      </div>
    );
  }
}