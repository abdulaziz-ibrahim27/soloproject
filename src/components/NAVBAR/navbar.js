import React, { Component } from "react";
import img from "./icon.png";
export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <a href="" className="navbar-brand">
          <img id="icon" width="50px" src={img} alt="" />
          <span id="text">solo leveling</span>
        </a>
      </nav>
    );
  }
}
