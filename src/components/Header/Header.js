import React from 'react';

import './header.scss';

const Header = ({ title }) => {
  return (
    <header className="header-container">
      <h1>{title}</h1>
    </header>
  );
};

export { Header };
