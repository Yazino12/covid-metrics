/* global BigInt */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import Header from './Header';

import { fetchData } from '../Redux/Data/data';

const Home = () => {
  const data = useSelector((state) => state.covidData);
  const [added, setAdded] = useState();

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const condition = true;

  let allConfirmed = BigInt(0);
  let allRecovered = BigInt(0);
  let allDeaths = BigInt(0);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);

  useEffect(() => {
    data.map((country) => {
      const [, countryObject] = country;
      const obj = Object.values(countryObject)[0];
      allConfirmed += BigInt(obj.confirmed);
      allRecovered += BigInt(obj.recovered);
      allDeaths += BigInt(obj.deaths);
      return { allConfirmed, allRecovered, allDeaths };
    });
    setAdded(allConfirmed);
  }, []);

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
            <h2>
              4390587
              {added}
            </h2>
            <p>CASES WORLD-WIDE</p>
          </div>
        </div>
        <div className="all-stats">
          <p className="p">ALL STATS</p>
          <div className="stats">
            <div className="stat confirmed">
              <h2>{allConfirmed}</h2>
              <p>confirmed</p>
            </div>
            <div className="stat recovered">
              <h2>{allRecovered}</h2>
              <p>recovered</p>
            </div>
            <div className="stat deaths">
              <h2>{allDeaths}</h2>
              <p>deaths</p>
            </div>
          </div>
        </div>
        <div className="countries">
          {data.map((country) => {
            const [countryName] = country;
            const countryElement = (
              <div className="country" key={countryName}>
                <BsArrowRightCircle
                  className="open-details"
                  onClick={() => Navigate(`details/${countryName}`)}
                />
                <h2>{country[0]}</h2>
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
