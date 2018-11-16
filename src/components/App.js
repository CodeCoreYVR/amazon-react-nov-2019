import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';
import HomePage from './HomePage';
import NavBar from './NavBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/products/:id" component={ProductShowPage} />
        <Route path="/products" exact component={ProductIndexPage} />
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
};

export default App;
