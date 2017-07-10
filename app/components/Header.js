import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
     <div className="header" style={{textAlign: 'left'}}>
        <h2>Alita Kendrick</h2>
        <h5>Web Developer</h5>
      </div>
    );
  }
}

export default Header;

