import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Details from '../Components/Details';
import store from '../Redux/configStore';

describe('Details tests', () => {
  test('should render', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(details).toMatchSnapshot();
  });

  test('Checks if details content is there by checking text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(
      screen.getByRole('img', { name: /Covid-19 img/i })
    ).toBeInTheDocument();
  });
});
