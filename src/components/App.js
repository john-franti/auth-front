import React from 'react';
import Navbar from './Navbar';
import About from './About';
import PaintingsContainer from './PaintingsContainer';

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
            <Route exact path="/" component={About} />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
