import React, { Component } from "react";
import Typist from 'react-typist';

import "react-typist/dist/Typist.css";

export default class RestartingTypist extends Component {
    state = {typing: true}
    done = () => {
      this.setState({ typing: false }, () => {
        setTimeout(() => this.setState({ typing: true }), this.props.timeout || 0);
      });
    }
    render() {
      const {children, timeout, displayTexts, ...props} = this.props;
      return this.state.typing ?
        <Typist {...props} onTypingDone={this.done}>
          {displayTexts.map((text, idx) => {
          return (
            <div key={idx}>
              {text}
              <Typist.Backspace count={text.length} delay={1500}/>
              <Typist.Delay ms={600}/>
            </div>
          )
          })}
        </Typist>
        : <span></span>;
    }
  }