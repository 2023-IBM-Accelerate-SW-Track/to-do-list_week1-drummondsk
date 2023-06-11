import React, { Component } from 'react';
import "./About.css"
import profile_picture_name from "../assets/profile_pic_name.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile_picture_name} // Image goes here
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Kyle Drummonds</div>
        <div className="brief_description">
        Hi, my name is Kyle Drummonds and I’m a first generation college student who was born and raised in Jamaica. 
        As a second year computer science major at Berea College with a minor in business administration, 
        I yearn to enhance my creative expression through problem solving and apply my knowledge of business operations to create effective solutions. 
        At the heart of all of this is the notion of conceptualization to break problems in smaller components and arrive at a feasible and logical solutions. 
        What makes me great at doing this is my passion, drive and self motivation to always strive to learn and develop my skills continually.
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}