// src/components/ChatHeader.js

import React from 'react';
import { FiUser, FiBell, FiMoreHorizontal } from 'react-icons/fi';
import './ChatHeader.css';
import { useNavigate } from 'react-router-dom';

const ChatHeader = () => {
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate('/');
  };
  return (
    <div className="chat-header">
      <FiUser className="icon" onClick={goToLandingPage} />
      <span>Tony Stark</span>
      <span>Founder, Gumroad & Flexile</span>
      <FiBell className="icon" />
      <FiMoreHorizontal className="icon" />
    </div>
  );
}

export default ChatHeader;
