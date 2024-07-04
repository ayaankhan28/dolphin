// src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FiShare2, FiPhone } from 'react-icons/fi';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <div className="landing-page">
      <div className="profile-header">
        <img src="rdj.jpeg" alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>Tony Stark</h1>
          <p>Founder, Gumroad & Flexile</p>
        </div>
        <FiShare2 className="icon" />
      </div>
      <div className="about-section">
        <h3>About</h3>
        <p>Tony Stark, also known as Iron Man, is a billionaire industrialist, genius inventor, and founding member of the Avengers in the Marvel Cinematic Universe. Played by Robert Downey Jr., Stark is known for his sharp intellect, charismatic personality, and cutting-edge technology. After inheriting Stark Industries from his father, Howard Stark, Tony's life changes when he is captured and forced to build a weapon. Instead, he creates a suit of armor to escape, marking the birth of Iron Man. Stark's journey evolves from a self-centered playboy to a heroic figure dedicated to protecting the world, culminating in his ultimate sacrifice to defeat Thanos and save the universe.4o".</p>
      </div>
      <div className="ask-section">
        <input 
          type="text" 
          placeholder="Ask me any question" 
          onFocus={handleClick}
        />
        
      </div>
      <div className="categories">
        <span>Entrepreneurship</span>
        <span>Finance</span>
        <span>Economics</span>
        <span>Technology</span>
        <span>Marketing</span>
        <span>Psychology</span>
        <span>Politics</span>
        <span>Social-Media</span>
        <span>Sociology</span>
        <span>Religion</span>
      </div>
    </div>
  );
}

export default LandingPage;
