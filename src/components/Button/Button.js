import React from 'react';

import './button.scss';

const Button = ({ img, label, onClick, className = '' }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {img ? <img src={img} alt="label" /> : label}
    </button>
  );
};

export { Button };
