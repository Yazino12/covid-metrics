import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Header from '../Components/Header';
import store from '../Redux/configStore';

describe('Header tests', () => {
  test('should render', () => {
    const header = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(header).toMatchSnapshot();
  });

  test('Checks if header content is there by checking the logo text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(
      screen.getByRole('heading', { name: /COVID METRICS/i })
    ).toBeInTheDocument();
  });
});
