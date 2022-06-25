import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../Components/Home';
import store from '../Redux/configStore';

describe('Home tests', () => {
  test('should render', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(home).toMatchSnapshot();
  });
});
