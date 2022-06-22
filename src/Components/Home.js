import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  fetch('https://v3.football.api-sports.io/leagues', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '9c8b44d408e5479d162a7ea1920e4c1c',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <h1>Home</h1>
      <div className="links">
        <NavLink to="/details" className="link">
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
