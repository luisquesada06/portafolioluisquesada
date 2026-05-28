import React from 'react';
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me and email.</p>
        </div>

        <form action="https://formsubmit.co/luismunguia06092000@gmail.com" method="POST" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input name="name" type="text" className="contact__form-input"
              placeholder='Insert you name' />
            </div>

            <div className="contact__form-div">
              <input type="email" name='email' className="contact__form-input"
              placeholder='Insert you email' />
            </div>


          </div>


          <div className="contact__form-div">
              <input type="text" name="subject" className="contact__form-input"
              placeholder='Insert you subject' />
            </div>

            <div className="contact__form-div " >
              <textarea name="message" id="" cols="30" rows="10"
              className='contact__form-input' placeholder='Write your message'></textarea>
            </div>

            <button type='submit' className="btn">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
