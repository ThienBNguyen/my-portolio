import React, { Component } from "react";
import "./Header.scss";
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>TN</h1>
        <ul className="nav">
          <li><a href="#" target="_blank">about</a></li>
          <li><a href="#" target="_blank">skills</a></li>
          <li><a href="#" target="_blank">projects</a></li>
          <li><a href="#" target="_blank">contact</a></li>
        </ul>
      </div>
    );
  }
}
