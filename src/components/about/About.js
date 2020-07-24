import React from "react";
import ThienImage from "../../images/thien-image.png";
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <h2>Thien Nguyen</h2>
      <img src={ThienImage} alt="Thien Nguyen " />

      <p>
        HI, my name is Thien. I am a self-taught developer with years of
        self-learning. i finished my bachelor in public health however I know
        that working in healthcare is not for me. first time, i know about code
        and create amazing make me more excited and challenge my self more. i
        have proven ability in developing multi-page and single page website
        with SASS and javascript and proficient in ReactJs to building user
        interfaces and create reusable UI components.
      </p>
    </div>
  );
}
