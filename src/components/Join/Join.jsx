import React from 'react';
import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  
    const form = useRef();
 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c52jg9y', 'template_biod6fn', form.current, 'AE3nc7MzrRkksOOTT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="Join" id="join-us">
    {/* left-side of join  */}
        <div className="left-j">
            <hr />
            <div>
            <span className='stroke-text'>READY TO</span>
            <span> EVEL UP</span>
            </div>

            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
            </div>

        </div>
    {/* left-side of join  */}


    {/* right-side of join  */}
    <div className="right-j">
        <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter your Email address' />
            <button className='btn btn-j'>Join Now</button>
        </form>
    </div>
    {/* right-side of join  */}

    </div>
  )
}

export default Join
