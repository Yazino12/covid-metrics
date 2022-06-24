import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from './Header';
import wallpaper from '../assets/covid-1.jpg';

const Details = () => {
  const data = useSelector((state) => state.covidData);
  const params = useParams();
  const condition = false;

  const currentCountry = data.filter((country) => {
    let result = '';
    if (country[0] === params.Country) result = country;
    return result;
  });
  const [[countryName, countryObject]] = currentCountry;
  const all = Object.values(countryObject)[0];
  const {
    confirmed, recovered, deaths, population, updated,
  } = all;

  return (
    <>
      <Header conditionProp={condition} />
      <div className="details">
        <div className="header-details">
          <img src={wallpaper} alt="Covid-19 img" />
          <div className="country-cases">
            <h2>{countryName}</h2>
            <p>
              {confirmed.toLocaleString()}
              <span>cases</span>
            </p>
          </div>
        </div>
        <div className="stats-by-country">
          <p className="p">STATS BY COUNTRY</p>
          <div className="stats">
            <div className="stat confirmed">
              <h4>confirmed</h4>
              <p>{confirmed?.toLocaleString()}</p>
            </div>
            <div className="stat recovered odds">
              <h4>recovered</h4>
              <p>{recovered?.toLocaleString()}</p>
            </div>
            <div className="stat deaths">
              <h4>deaths</h4>
              <p>{deaths?.toLocaleString()}</p>
            </div>
            <div className="stat population odds">
              <h4>population</h4>
              <p>{population?.toLocaleString()}</p>
            </div>
            <div className="stat population">
              <h4>updated</h4>
              <p>{updated || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
