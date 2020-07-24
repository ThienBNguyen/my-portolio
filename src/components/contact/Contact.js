import React from "react";

export default function Contact() {
  return (
    <div>
      <h3>Get In Touch</h3>
      <form>
        <lable for="name">name</lable>
        <p>*</p>
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
        <p>*</p>
        <input type="email" placeholder="Email Please"></input>
        <lable for="message">Message</lable>
        <p>*</p>
        <textarea></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
