import React from 'react';

export default function Resume() {
    // Function will execute on click of button
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('adam-hovda-resume.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'adam-hovda-resume.pdf';
              alink.click();
          })
      })
  }
  
  return (
    <div className='mainSection'>

      <center>

                
                <button className='btnStyle btnResume' onClick={onButtonClick}>
                    Download PDF
                </button>
                <br></br>
                <img className='resumeSection' src="adam-hovda-resume.png" width="40%"></img>
            </center>
    </div>
  );
}