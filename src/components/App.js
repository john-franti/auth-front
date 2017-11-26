import React from 'react';
import Navbar from './Navbar';
import About from './About';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <About />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
