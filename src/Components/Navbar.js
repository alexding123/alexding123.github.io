import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../imgs/logo.svg";
export default class NavbarComponent extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link 
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                activeClass="active"
                to="classes"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Online Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}