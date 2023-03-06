import React from 'react';
import profilePic from './../../images/pic.jpg'

export default function About() {
  return (

    <container className="container mainSection aboutSection">
      <div className='container'>
      <h1 className='p-3'>About Me</h1>
        <div className='row'>
          <p className='m-5 col '>
          Hello, my name is Adam and I built my first website 15 years ago and have been tinkering ever sense.  I recently decide to change my career as a client manager in the financial sector to something I was more passionate about.  I enjoy the logical side of this so writing algorithms and function is what I gravitate towards.  But I also enjoy the design aspect of things.  It's so satisfying to have an idea in your mind and then being able to create that on a site.  
          <br></br>
          <br></br>

          I recently completed the University of Arizona bootcamp program and am actively looking for an opportunity to advance my career.  
          <br></br>
          <br></br>
          I am a fullstack developer and enjoy both frontend and backend.  As a junior developer I can bring my ability to learn and passion I have for coding.  I have worked with clients the majority of my career and have the ability to communicate accomplishments, set expectations and diffuse difficult situations.  
          </p>
          <img src={profilePic} className='col-2 profilePic'></img>
        </div>
        </div>
    </container>
  );
}