import React from 'react';
import onOffPic from './../../images/PortfolioPics/onOffPic.png'
import ndncPic from './../../images/PortfolioPics/ndncPic.png'
import passwordGeneratorPic from './../../images/PortfolioPics/passwordGeneratorPic.png'
import schedulerPic from './../../images/PortfolioPics/schedulerPic.png'
import socialNetworkAPIPic from './../../images/PortfolioPics/socialNetworkAPIPic.png'
import weatherAppPic from './../../images/PortfolioPics/weatherAppPic.png'

export default function Portfolio() {
  return (
    <div className='mainSection'>
      <h1 className='pageTitle'>Portfolio</h1>


      <section className='portfolioSection  '>
            <div className="container">
                <div className="row d-flex justify-content-center">
                  <h2 className='pageTitle'>Collaborative Projects</h2>
                  <div className='col-xl-5 col-md-5 col-10 projectRow'>
                    <img className='portfoliImg' src={ndncPic}/>
                    <h3 className='portfoliLink'><a href="https://github.com/AnthonyFrederick7/New-Day-New-City">GitHub</a> / <a href="https://anthonyfrederick7.github.io/New-Day-New-City/"> Deployed Site</a></h3>
                   </div>
                   <div className='col-xl-5 col-md-5 col-10 projectRow'>
                    <img className='portfoliImg' src={onOffPic}/>
                    <h3 className='portfoliLink'><a href="https://github.com/rxtATX/OffNOn">GitHub</a> / <a href="https://limitless-castle-65696.herokuapp.com/login"> Deployed Site</a></h3>

                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                <h2 className='pageTitle'>Solo Projects</h2>
                    <div className='col-xl-5 col-md-5 col-10 projectRow'>
                    <img className='portfoliImg' src={weatherAppPic}/>
                    <h3 className='portfoliLink'><a href="https://github.com/adamhovda/weather-app">GitHub</a> / <a href="https://adamhovda.github.io/weather-app/"> Deployed Site</a></h3>
                    </div>
                    <div className='col-xl-5 col-md-5 col-10 projectRow'>
                    <img className='portfoliImg' src={schedulerPic}/>
                    <h3 className='portfoliLink'><a href="https://github.com/adamhovda/scheduler">GitHub</a> / <a href="https://adamhovda.github.io/scheduler/"> Deployed Site</a></h3>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
     
                  <div className='col-xl-5 col-md-5 col-10 projectRow'>
                  <img className='portfoliImg' src={socialNetworkAPIPic}/>
                  <h3 className='portfoliLink'><a href="https://github.com/adamhovda/social-network-api">GitHub</a> / <a href="https://github.com/adamhovda/social-network-api"> Deployed Site</a></h3>
                  </div>
                  <div className='col-xl-5 col-md-5 col-10 projectRow'>
                  <img className='portfoliImg' src={passwordGeneratorPic}/>
                  <h3 className='portfoliLink'><a href="https://github.com/adamhovda/password-randomizer">GitHub</a> / <a href="https://adamhovda.github.io/password-randomizer/"> Deployed Site</a></h3>
                  </div>
                </div>
        
            </div>

      </section>
    </div>
  );
}