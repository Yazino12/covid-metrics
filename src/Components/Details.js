import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = () => {
  return (
    <div>
      <h1>Details</h1>
      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Details;
