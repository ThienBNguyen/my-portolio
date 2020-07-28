import React, { Component } from 'react'
import "./Skills.scss"
export default class Skills extends Component {
    render() {
        return (
            <div className="Skills">
            <h2>Skills</h2>
            <div className="container">
                <div className="fill html" >
                  <div className="tag ">HTML</div>
                </div>
                <p>90%</p>
              </div>
                <div className="container">
                <div className="fill scss" >
                  <div className="tag ">SCSS</div>
                </div>
                <p>90%</p>
              </div>
              <div className="container">
                <div className="fill react" >
                  <div className="tag ">React</div>
                </div>
                <p>80%</p>
              </div>
              <div className="container">
                <div className="fill javascript" >
                  <div className="tag ">Javascript</div>
                </div>
                <p>80%</p>
              </div>
              <div className="container">
                <div className="fill node" >
                  <div className="tag ">Node</div>
                </div>
                <p>50%</p>
              </div>
            </div>
        )
    }
}
