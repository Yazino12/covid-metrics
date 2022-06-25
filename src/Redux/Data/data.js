import Axios from 'axios';

const link = 'https://api.covid19api.com/summary';

const FETCHDATA = 'FETCHDATA';

// REDUCERS
const covidData = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA:
      return Object.entries(action.payload)[0];
    default:
      return state;
  }
};

// ACTIONS
const fetchData = (data) => ({
  type: FETCHDATA,
  payload: data,
});

export const fetchDataApi = () => async (dispatch) => {
  const data = await Axios.get(link);
  dispatch(fetchData(data));
};

export default covidData;
