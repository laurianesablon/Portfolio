import { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import {
  PUBLIC_KEY,
  TEMPLATE_ID,
  SERVICE_ID,
  RECAPTCHA_KEY,
} from "../utils/apiKey";
import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContext } from "../App";

export const Contact = () => {
  const form = useRef();
  const { theme } = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.querySelector('input[name="name"]').value;
    const email = form.current.querySelector('input[name="email"]').value;
    const message = form.current.querySelector('textarea[name="message"]').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
  
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setResponse("Message sent!");
        setIsModalOpen(true);
        form.current.reset(); // Reset the form
      },
      (error) => {
        console.log(error.text);
        setResponse(error.text);
      }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <ReCAPTCHA sitekey={RECAPTCHA_KEY} className="recaptcha" theme={theme}/>
        <input className="submit" type="submit" value="Send" />
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-sent-content">
            <p>{response}</p>
            <i
              className="fa-solid fa-xmark close-button"
              onClick={closeModal}
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};
