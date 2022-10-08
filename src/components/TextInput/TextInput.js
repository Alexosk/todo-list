import React, { useState } from 'react';
import { Button } from '../Button';

import './textInput.scss';

const TextInput = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length <= 0) return;
    addTask(userInput);

    setUserInput('');
  };

  return (
    <form className="input-container">
      <input className="text-input" value={userInput} type="text" onChange={handleChange} placeholder="Enter todo..." />
      <Button onClick={handleSubmit} label="+" className="is-submit-btn" />
    </form>
  );
};

export default TextInput;
