import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './pages';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    signedIn: false
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar signedIn={this.state.signedIn} />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
