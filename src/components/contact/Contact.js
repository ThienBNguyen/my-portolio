import React from "react";
import "./Contact.scss"
export default function Contact() {
  return (
    <div className="Contact-info">
      <h3>Get In Touch</h3>
      <form className="Contact-form">
        <lable for="name">name</lable>
     
        <input
          type="text"
          name="fname"
          placeholder="Please Enter Your First Name"
        ></input>
        <input
          type="text"
          name="lname"
          placeholder="Please Enter Your Last Name"
        ></input>
        <lable for="email">Email</lable>
     
        <input type="email" placeholder="Email Please"></input>
        <lable for="message">Message</lable>
     
        <textarea></textarea>
        <input type="submit" value="Submit" className= "btn"/>
      </form>
    </div>
  );
}
