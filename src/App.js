import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configStore';

import Home from './Components/Home';
import Details from './Components/Details';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:Country" element={<Details />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
