import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';
import NewProductPage from './NewProductPage';
import HomePage from './HomePage';
import NavBar from './NavBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/products/new" component={NewProductPage} />
          <Route path="/products/:id" component={ProductShowPage} />
          <Route path="/products" exact component={ProductIndexPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
