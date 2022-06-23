import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Home = () => (
  // fetch('https://covid-api.mmediagroup.fr/v1/cases', {
  //   method: 'GET',
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log([data]))
  //   .catch((err) => {
  //     console.log(err);
  //   });

  <div className="home">
    <div className="header-wrapper">
      <div className="header">{}</div>
      <div className="date-title">
        <h2>{new Date().getFullYear()}</h2>
        <p>COVID UPDATE</p>
      </div>
      <div className="cases-title">
        <h2>10008798</h2>
        <p>CASES WORLD-WIDE</p>
      </div>
    </div>
    <div className="all-stats">
      <p className="p">ALL STATS</p>
      <div className="stats">
        <div className="stat confirmed">
          <h2>102</h2>
          <p>confirmed</p>
        </div>
        <div className="stat recovered">
          <h2>12,457</h2>
          <p>recovered</p>
        </div>
        <div className="stat deaths">
          <h2>1,453</h2>
          <p>deaths</p>
        </div>
      </div>
    </div>
    <div className="countries">
      <div className="country">
        <BsArrowRightCircle className="open-details" />
        <h2>Somalia</h2>
      </div>
      <div className="country">
        <BsArrowRightCircle />
        <h2>Israel</h2>
      </div>
      <div className="country">
        <BsArrowRightCircle />
        <h2>Oman</h2>
      </div>
      <div className="country">
        <BsArrowRightCircle />
        <h2>Libya</h2>
      </div>
    </div>
    <div className="links">
      <NavLink to="/details" className="link">
        Details
      </NavLink>
    </div>
  </div>
);

export default Home;
