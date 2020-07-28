import React, { Component } from "react";
import First from "../../images/first-project.jpg";
import Second from "../../images/second-project.jpg";
import Third from "../../images/third-project.jpg";
import Four from "../../images/four-project.jpg";
import "./Project.scss"
export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <div className="Project">
      <img className="Project-item" src={First} alt="Thien Nguyen " />
      <h4>Handwrytten
</h4>
<p> Strategy, UI/UX, Illustration, Animation, CMS Implementation</p>
      </div>
      <div className="Project">

       <img className="Project-item" src={Second} alt="Thien Nguyen " />
      <h4>rested
</h4>
<p>  Strategy, Branding, UI/UX</p>
      </div><div className="Project">
      <img className="Project-item" src={Third} alt="Thien Nguyen " />
      <h4>cognito
</h4>
<p> Branding, UI/UX, Illustration, Animation, CMS Implementation</p>
      </div><div className="Project">
       <img className="Project-item" src={Four} alt="Thien Nguyen " />
             <h4>W.S. Cumby
</h4>
<p> Strategy, UI/UX, Illustration, Animation, CMS Implementation</p>
      </div>

      </div>
        
       
        
       
    );
  }
}
