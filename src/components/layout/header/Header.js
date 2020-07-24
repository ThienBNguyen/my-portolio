import React, { Component } from "react";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>TN</h1>
        <ul className="nav">
          <li>about</li>
          <li>skills</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
    );
  }
}
