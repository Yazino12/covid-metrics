import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from './Header';
import wallpaper from '../assets/covid-1.jpg';

const Details = () => {
  const data = useSelector((state) => Object.values(state.covidData)[1]);
  const params = useParams();
  const condition = false;
  let countries;

  if (data) {
    [, , , countries] = Object.values(data);
  }

  const currentCountry = countries?.filter((country) => {
    let result = '';
    if (country.Country === params.Country) result = country;
    return result;
  });

  let all;
  let TotalConfirmedy;
  let TotalRecoveredy;
  let TotalDeathsy;
  let NewConfirmedy;
  let NewRecoveredy;
  let NewDeathsy;
  let Datey;
  if (currentCountry) {
    [[, all]] = Object.entries(currentCountry);
    const {
      TotalConfirmed,
      TotalRecovered,
      TotalDeaths,
      NewConfirmed,
      NewRecovered,
      NewDeaths,
      Date,
    } = all;
    TotalConfirmedy = TotalConfirmed;
    TotalRecoveredy = TotalRecovered;
    TotalDeathsy = TotalDeaths;
    NewConfirmedy = NewConfirmed;
    NewRecoveredy = NewRecovered;
    NewDeathsy = NewDeaths;
    Datey = Date;
  }

  return (
    <>
      <Header conditionProp={condition} />
      <div className="details">
        <div className="header-details">
          <img src={wallpaper} alt="Covid-19 img" />
          <div className="country-cases">
            <h2>{params.Country}</h2>
            <p>
              {TotalConfirmedy?.toLocaleString()}
              <span>cases</span>
            </p>
          </div>
        </div>
        <div className="stats-by-country">
          <p className="p">STATS BY COUNTRY</p>
          <div className="stats">
            <div className="stat confirmed">
              <h4>confirmed</h4>
              <p>{TotalConfirmedy?.toLocaleString()}</p>
            </div>
            <div className="stat recovered odds">
              <h4>recovered</h4>
              <p>{TotalRecoveredy?.toLocaleString()}</p>
            </div>
            <div className="stat deaths">
              <h4>deaths</h4>
              <p>{TotalDeathsy?.toLocaleString()}</p>
            </div>
            <div className="stat population odds">
              <h4>new confirmed</h4>
              <p>{NewConfirmedy?.toLocaleString()}</p>
            </div>
            <div className="stat population odds">
              <h4>new confirmed</h4>
              <p>{NewRecoveredy?.toLocaleString()}</p>
            </div>
            <div className="stat population odds">
              <h4>new confirmed</h4>
              <p>{NewDeathsy?.toLocaleString()}</p>
            </div>
            <div className="stat population">
              <h4>updated</h4>
              <p>{Datey || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
