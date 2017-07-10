import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
     <div className='portfolio' style={{textAlign: 'center'}}>
        <h1>Portfolio text</h1>

        <div className='row'>
          <div className='col-md-4'>
            <div class="thumbnail">
              <img src="https://pixy.org/images/placeholder.png" height="134" width="180"/>
              <div className="caption">
                <h3>Project Name</h3>
                <p>Project Description</p>
                <p><a href="#" className="btn btn-primary" role="button">View Project</a></p>
              </div>
            </div>
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
