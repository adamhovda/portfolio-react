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
     

                    <img className='portfoliImg col-xl-5 col-md-5 col-10' src={ndncPic}/>
               

                    <img className='portfoliImg col-xl-5 col-md-5 col-10' src={onOffPic}/>
                  
                </div>
                <div className="row d-flex justify-content-center">
     

                    <img className='portfoliImg col-xl-5 col-md-5 col-10' src={weatherAppPic}/>
               

                    <img className='portfoliImg col-xl-5 col-md-5 col-10' src={schedulerPic}/>
                  
                </div>
                <div className="row d-flex justify-content-center">
     

                  <img className='portfoliImg col-xl-5 col-md-5 col-10' src={socialNetworkAPIPic}/>


                  <img className='portfoliImg col-xl-5 col-md-5 col-10' src={passwordGeneratorPic}/>
                
              </div>
        
            </div>

      </section>
    </div>
  );
}