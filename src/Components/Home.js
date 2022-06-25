import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import Header from './Header';

import { fetchDataApi } from '../Redux/Data/data';

const Home = () => {
  const data = useSelector((state) => Object.values(state.covidData)[1]);
  let global;
  let countries;

  if (data) {
    [, , global] = Object.values(data);
    [, , , countries] = Object.values(data);
  }

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const condition = true;

  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  return (
    <>
      <Header conditionProp={condition} />
      <div className="home">
        <div className="header-wrapper">
          <div className="header">{}</div>
          <div className="date-title">
            <h2>{new Date().getFullYear()}</h2>
            <p>COVID UPDATE</p>
          </div>
          <div className="cases-title">
            <h2>{global?.TotalConfirmed}</h2>
            <p>CASES WORLD-WIDE</p>
          </div>
        </div>
        <div className="all-stats">
          <p className="p">ALL STATS</p>
          <div className="stats">
            <div className="stat confirmed">
              <h2>{global?.TotalConfirmed}</h2>
              <p>confirmed</p>
            </div>
            <div className="stat recovered">
              <h2>{global?.TotalRecovered}</h2>
              <p>recovered</p>
            </div>
            <div className="stat deaths">
              <h2>{global?.TotalDeaths}</h2>
              <p>deaths</p>
            </div>
          </div>
        </div>
        <div className="countries">
          {countries?.map((country) => {
            const countryName = country.Country;
            const countryElement = (
              <div className="country" key={country.ID}>
                <BsArrowRightCircle
                  className="open-details"
                  onClick={() => Navigate(`details/${countryName}`)}
                />
                <h2>{countryName}</h2>
              </div>
            );

            return countryElement;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
