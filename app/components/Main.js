import React from 'react';

import Header from './Header.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';


class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div id="header"> <Header /> </div>
          <div id="jumbotron"> <Jumbotron /> </div>
	      <div id="about"> <About /> </div>
	      <div id="portfolio"> <Portfolio /> </div>
	      <div id="footer"> <Footer /> </div>
      </div>);
  }
}

export default App;