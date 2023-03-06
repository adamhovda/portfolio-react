import React from 'react';
import profilePic from './../../images/pic.jpg'

export default function About() {
  return (

    <container className="container mainSection aboutSection">
      <div className='container'>
      <h1 className='p-3'>About Me</h1>
        <div className='row'>
          <p className='m-5 col '>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
          <img src={profilePic} className='col-2 profilePic'></img>
        </div>
        </div>
    </container>
  );
}