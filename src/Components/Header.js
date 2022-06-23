import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';

const Header = () => (
  <header>
    <h1>Leagues Metrics</h1>
    <div className="right">
      <MdKeyboardVoice />
      <FiSettings />
    </div>
  </header>
);

export default Header;
