import React from 'react';
import { NavLink } from 'react-router-dom';
import wallpaper from '../assets/covid-1.jpg';

const Details = () => (
  <div className="details">
    <div className="header-details">
      <img src={wallpaper} alt="Covid-19 img" />
      <div className="country-cases">
        <h2>Somalia</h2>
        <p>
          12,457
          <span>cases</span>
        </p>
      </div>
    </div>
    <div className="stats-by-country">
      <p className="p">STATS BY COUNTRY</p>
      <div className="stats">
        <div className="stat population">
          <h4>population</h4>
          <p>35530081</p>
        </div>
        <div className="stat confirmed">
          <h4>confirmed</h4>
          <p>35530081</p>
        </div>
        <div className="stat recovered">
          <h4>recovered</h4>
          <p>35530081</p>
        </div>
        <div className="stat deaths">
          <h4>deaths</h4>
          <p>35530081</p>
        </div>
      </div>
    </div>
    <div className="links">
      <NavLink to="/" className="link">
        Home
      </NavLink>
    </div>
  </div>
);

export default Details;
