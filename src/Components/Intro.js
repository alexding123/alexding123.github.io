import React, { Component } from "react";
import RestartingTypist from "./RestartingTypist";
import Tooltip from "@material-ui/core/Tooltip";
import email from "../imgs/email.svg";
import github from "../imgs/github.svg";
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
      "Learner",
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
          I'm a high school senior intending to major in CS, interested in machine learning and its various applications. I also tinker with many randomly-inspired projects to learn new technologies. 
          <br></br><br></br>
          I'm interning with <a href="https://www.cs.uml.edu/~bliu/">Dr. Benyuan Liu's group</a> to explore machine-learning approaches to computer vision problems, and, for the last year, I've been doing research through <a href="http://math.mit.edu/research/highschool/primes/index.php">MIT PRIMES</a> to evaluate some exciting new work in parallel computing. When I'm not coding, you'll probably find me practicing cello, fencing, or volunteering.  
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
          <a href="mailto:alding@commschool.org">
            <img alt="email" src={email} className="icon"/>
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