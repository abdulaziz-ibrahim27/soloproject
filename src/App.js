import React, { Component } from "react";
import Navbar from "./components/NAVBAR/navbar";
import CharList from "./components/CHARACTERLIST/CharacterList";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <CharList></CharList>
      </>
    );
  }
}
