import React, { Component } from "react";
import { CharData } from "./CharacterData";
import Char from "../CHARACTER/Character";

export default class CharacterList extends Component {
  state = {
    charInfo: CharData,
  };
  render() {
    // const { charInfo } = this.state;
    return (
      <span>
        {this.state.charInfo.map((char) => {
          return <Char info={char}></Char>;
        })}
      </span>
    );
  }
}
