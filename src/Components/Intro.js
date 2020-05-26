import React, { Component } from "react";
import RestartingTypist from "./RestartingTypist";
import Tooltip from "@material-ui/core/Tooltip";
import email from "../imgs/email.svg";
import github from "../imgs/github.svg";
import resume from '../imgs/resume.svg';
import headshot from "../imgs/headshot.png";

function shuffleArray(arrayOld) {
  const array = [...arrayOld];
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
export default class IntroComponent extends Component {
  
  getTypist() {
    const texts = [
      "Computer Scientist",
      "Student",
      "Developer",
      "Problem solver",
      "Musician",
    ]
    const displayTexts = shuffleArray(texts);
    return (
      <RestartingTypist 
        avgTypingDelay={80}
        cursor={{show:true, 
                 blink:true,
                }}
        displayTexts={displayTexts}
      />
    )
  }
  getIntro() {
    return (
      <div className="section">
        <div className="text-block">
          Hi, I'm Alex, a {this.getTypist()} 
          <br></br><br></br>
          I'm an incoming freshman at Brown, interested in machine learning and its various applications. I also tinker with many randomly-inspired projects to learn new technologies. 
          <br></br><br></br>
          I'm interning with <a href="https://www.cs.uml.edu/~bliu/">Dr. Benyuan Liu's group</a> to explore machine-learning approaches to computer vision problems, and, for the last year, I've been developing Commontime, a Firebase-powered scheduling solution, for my high school. When I'm not coding, you'll probably find me practicing cello or baking. 
        </div>
      </div>
    )
  }

  getIcons() {
    return (
      <div className="icon-conatiner">
        <Tooltip title="GitHub">
          <a href="https://github.com/alexding123/" target="_blank" rel="noopener noreferrer">
            <img alt="github" src={github} className="icon"/>
          </a>
        </Tooltip>
        <Tooltip title="Email">
          <a href="mailto:ding@brown.edu">
            <img alt="email" src={email} className="icon"/>
          </a>
        </Tooltip>
        <Tooltip title="Email">
          <a href="/resume.pdf">
            <img alt="email" src={resume} className="icon"/>
          </a>
        </Tooltip>
      </div>
    )
  }
  
  render() {
    return (
      <div className="intro-container" id="intro">
        {<img className="headshot" src={headshot} alt="headshot"/>}
        {this.getIcons()}
        {this.getIntro()}
      </div>
    );
  }
}