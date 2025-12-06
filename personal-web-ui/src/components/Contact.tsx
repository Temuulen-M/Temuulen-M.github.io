import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>I'd love to hear from you. Feel free to reach out!</p>
      <div className="contact-links">
        <a href="mailto:temmol@kth.se" className="contact-button">Email</a>
        <a href="https://github.com/Temuulen-M" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
        <a href="https://www.linkedin.com/in/temuulen-molomjamts-87bb93277/" target="_blank" rel="noopener noreferrer" className="contact-button">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;