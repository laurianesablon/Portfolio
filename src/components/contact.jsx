import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from '../utils/apiKey';

export const Contact = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setResponse("Message sent!");
          setIsModalOpen(true);
      }, (error) => {
          console.log(error.text);
          setResponse(error.text);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-sent-content">
            <p>{response}</p>
            <i className="fa-solid fa-xmark close-button" onClick={closeModal}></i>
          </div>
        </div>
       )} 
    </div>
  );
};