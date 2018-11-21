import React,  {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';
import NewProductPage from './NewProductPage';
import SignInPage from './SignInPage';
import HomePage from './HomePage';
import NavBar from './NavBar';
import { User, Session } from '../requests'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => this.setState({ currentUser: null }));
  }

  getUser() {
    User.current().then(currentUser => {
      if (currentUser.id) {
        this.setState({ currentUser });
      }
    })
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
          <Switch>
            <Route path="/session/new" exact render={
              (routeProps) => <SignInPage {...routeProps} onSignIn={this.getUser} />}
            />
            <Route path="/products/new" component={NewProductPage} />
            <Route path="/products/:id" component={ProductShowPage} />
            <Route path="/products" exact component={ProductIndexPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
