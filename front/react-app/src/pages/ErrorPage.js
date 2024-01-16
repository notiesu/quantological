import React from 'react';
import '../styles/Error.css';

const Error = ({ message, onClose }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Error;
