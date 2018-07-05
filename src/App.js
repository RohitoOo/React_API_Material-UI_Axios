import React, { Component } from 'react';
import './App.css';
import logo  from './logo.svg'
import NavBar from './components/navbar/NavBar'
import Search from './components/photo-search/PhotoSearch'
import Result from './components/photo-results/PhotoResults'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div style={{background: 'white', textAlign: 'center'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
          <Search />
          <Result />
      </div>
    </MuiThemeProvider>


    );
  }
}

export default App;
