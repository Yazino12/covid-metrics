import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import Header from './Header';

import { fetchDataApi } from '../Redux/Data/data';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const data = useSelector((state) => Object.values(state.covidData)[1]);
  let global;
  let countries;

  if (data) {
    [, , global] = Object.values(data);
    [, , , countries] = Object.values(data);
  }
  const filteredCountries = countries?.filter((country) => {
    const newCountry = country.Country.toLowerCase().includes(searchText);
    return newCountry;
  });

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
            <h2>{global?.TotalConfirmed.toLocaleString()}</h2>
            <p>CASES WORLD-WIDE</p>
          </div>
        </div>
        <div className="all-stats">
          <div className="search-bar">
            <p className="p">ALL STATS</p>
            <input
              type="text"
              placeholder="Search"
              className="search-bar-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            />
          </div>
          <div className="stats">
            <div className="stat confirmed">
              <h2>{global?.TotalConfirmed.toLocaleString()}</h2>
              <p>confirmed</p>
            </div>
            <div className="stat recovered">
              <h2>{global?.TotalRecovered.toLocaleString()}</h2>
              <p>recovered</p>
            </div>
            <div className="stat deaths">
              <h2>{global?.TotalDeaths.toLocaleString()}</h2>
              <p>deaths</p>
            </div>
          </div>
        </div>
        <div className="countries">
          {filteredCountries?.map((country) => {
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
