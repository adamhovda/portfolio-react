import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";


export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfoysbs', 'template_r3tqcye', form.current, 'VYDE1el5gNM2Y6b3U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <section className='mainSection'>
    <h1 className='pageTitle'>Contact Me</h1>
    <h4 className='pageTitle'>Questions, Concerns, Job Opportunities?</h4>
    <h5 className='pageTitle'>Feel free to Email me here. </h5>

    <div className='contactForm'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br></br>
      <input required="required" type="text" name="user_name" />
      <br></br>
      <label>Email</label>
      <br></br>
      <input required="required" type="email" name="user_email" />
      <br></br>
      <label>Message</label>
      <br></br>
      <textarea required="required" name="message" />
      <br></br>
      <input className='btnStyle' type="submit" value="Send" />
    </form>
  </div>

    </section>

  )
};