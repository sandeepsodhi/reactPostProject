import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';


import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // basename="/myLink" below mentioned url is base domain url, if we are loading app through a sub folder then on deploying server we can use basename to appent url and load app from there
      <BrowserRouter basename="/"> 
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
