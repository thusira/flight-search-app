import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import SearchWidget from './components/search-widget';

class App extends Component {
  render() {
    return (      
      <div className="">
        <div className="col-md-12 text-center">
        <h1>Air Canada Flight Reservation</h1>
        <SearchWidget />
        </div>

      </div>
    );
  }
}

export default App;