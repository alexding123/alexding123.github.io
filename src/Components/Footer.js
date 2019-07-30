import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-left">© Alex Ding, 2019</div>
        <div className="footer-center">
          <Link 
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Back on Top
          </Link>
        </div>
        <div className="footer-right"><a href="https://github.com/alexding123/alexding123.github.io">Source Code</a></div>
      </div>
    )
  } 
}