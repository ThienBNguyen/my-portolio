import React, { Component } from "react";
import First from "../../images/first-project.jpg";
import Second from "../../images/second-project.jpg";
import Third from "../../images/third-project.jpg";
import Four from "../../images/four-project.jpg";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <img src={First} alt="Thien Nguyen " />
        <img src={Second} alt="Thien Nguyen " />
        <img src={Third} alt="Thien Nguyen " />
        <img src={Four} alt="Thien Nguyen " />
      </div>
    );
  }
}
