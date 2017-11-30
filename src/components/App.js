import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';
import { api } from '../services/api';

import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      auth: {
        isLoggedIn: false,
        user: {}
      }
    };
  }

  login = data => {
    api.auth.login(data).then(res => {
      if (!res.error) {
        const updatedState = { ...this.state.auth, user: res };
        localStorage.setItem('token', res.id);
        this.setState({ auth: updatedState });
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
          currentUser={this.state.auth.user}
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" component={About} />
            <Route
              path="/login"
              render={() => <Login handleLogin={this.login} />}
            />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
