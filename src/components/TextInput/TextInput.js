import React from 'react';

import './textInput.scss';

const TextInput = ({ userInput, handleChange, placeholder, onKeyDown }) => {
  return (
    <input
      className="text-input"
      value={userInput}
      type="text"
      onChange={handleChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export { TextInput };
