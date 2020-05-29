import React, { Component } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import YouTube from 'react-youtube';


import video from "../imgs/video.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default class EmbedVideoComponent extends Component {
  state = {
    expanded: false,
    width: null,
  }
  componentDidMount() {
    this.setState({
      width: Math.floor(this.element.parentElement.clientWidth),
      height: Math.floor(this.element.parentElement.clientWidth * 39 / 64),
    });
  }
  render() {
    const link = this.props.link;
    const opts = {
      height: String(this.state.height),
      width: String(this.state.width),
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <React.Fragment>
      <OverlayTrigger
        overlay={<Tooltip>Video</Tooltip>}
      >
      <Button
        variant="link"
        onClick={() => this.setState({expanded:!this.state.expanded})}
        ref={(element) => this.element = element}
      >
        <img alt="github" src={video} className="icon"/>
      </Button>
      </OverlayTrigger>
      {this.state.expanded ? <YouTube
        videoId={link}
        opts={opts}
        onReady={this._onReady}
      /> : null}
      </React.Fragment>
    );
  }
}