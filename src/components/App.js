import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';

import { Route, Redirect } from 'react-router-dom';

import { api } from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log('history', this.props.history);
    if (token) {
      this.setState({ isLoggedIn: true });
      api.auth.getCurrentUser().then(data => {
        this.setState({ user: data });
      });
    }
  }

  loginUser = user => {
    this.setState({ user, isLoggedIn: true });
    localStorage.setItem('token', user.jwt);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
          user={this.state.user}
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" component={About} />
            <Route
              exact
              path="/login"
              render={props => (
                <Login {...props} handleLogin={this.loginUser} />
              )}
            />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
