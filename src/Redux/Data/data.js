const link = 'https://covid-api.mmediagroup.fr/v1/cases';

const FETCHDATA = 'FETCHDATA';

// REDUCERS
const covidData = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA:
      return Object.entries(action.playload);
    default:
      return state;
  }
};

// ACTIONS
export const fetchData = () => async (dispatch) => {
  const response = await fetch(link);
  const data = await response.json();
  dispatch({
    type: FETCHDATA,
    playload: data,
  });
};

export default covidData;
