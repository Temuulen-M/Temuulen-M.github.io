import React from 'react';
import profilePicture from '../assets/profile_picture.jpg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={profilePicture} width={150} height={150} alt="Temuulen Molomjamts" className="profile-picture" />
        <h1>Hi, I'm Temuulen</h1>
        <p className="subtitle">Here you can checkout everything I'm working on! <br /> Computer Science Student | Creative Problem Solver</p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </section>
  );
}

export default Hero;