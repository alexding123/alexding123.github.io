import React, { Component } from "react";

export default class ContactComponent extends Component {
  getContact() {
    return <span className="contact">
      Write me an email at <a href="mailto:ding@brown.edu">ding@brown.edu</a>!
    </span>
  }
  render() {
    return (
    <div className="contact-container" id="contact">
      <div className="contact-title title">
        Want to get in touch?
      </div>
      <div className="contact-container section">
        {this.getContact()}
      </div>
    </div>
    );
  }
}