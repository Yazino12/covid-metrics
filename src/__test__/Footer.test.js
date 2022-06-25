import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import store from '../redux/configStore';

describe('Footer tests', () => {
  test('should render', () => {
    const footer = render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(footer).toMatchSnapshot();
  });

  test('Checks if footer content is there by checking text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(
      screen.getByRole('link', { name: /Copyright ©Yasin 2022/i }),
    ).toBeInTheDocument();
  });
});
