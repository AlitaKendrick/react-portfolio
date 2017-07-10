import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
     <div className='portfolio' style={{textAlign: 'center'}}>
        <h1>Portfolio text</h1>

        <div className='row'>
          <div className='col-md-4'>
            <p> group 1 </p>
          </div>
          <div className='col-md-4'>
            <p> group 2 </p>
          </div>
          <div className='col-md-4'>
            <p> group 3 </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <p> group 4 </p>
          </div>
          <div className='col-md-4'>
            <p> group 5 </p>
          </div>
          <div className='col-md-4'>
            <p> group 6 </p>
          </div>
        </div>


      </div>
    );
  }
}

export default Portfolio;
