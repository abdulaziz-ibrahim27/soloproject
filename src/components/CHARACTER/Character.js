import React, { Component } from "react";

export default class Character extends Component {
  render() {
    const { name, img, info, link } = this.props.info;

    return (
      <div className="container">
        <img id="picture" src={img} alt="" />
        <a href={link} target="_blank">
          <h2 id="hunter-name">{name}</h2>
        </a>
        <p>{info}</p>
      </div>
    );
  }
}
