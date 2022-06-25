import React from 'react';

const space = ' ';

const Footer = () => (
  <footer>
    <a href="https://github.com/Yazino12">
      Copyright ©Yasin
      {space + new Date().getFullYear()}
    </a>
  </footer>
);

export default Footer;
