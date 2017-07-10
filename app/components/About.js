import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className='about' style={{textAlign: 'center'}}>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Contact Me</h3>
            <button type="button" className="btn btn-default btn-primary col-md-4">Email</button> <br /> <br />
            <button type="button" className="btn btn-default btn-primary col-md-4">GitHub</button> <br /> <br />
            <button type="button" className="btn btn-default btn-primary col-md-4">LinkedIn</button> <br /> 
          </div>
          <div className='col-md-6'>
            <h3>About Me</h3>
            <p> text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
            </p>            
          </div>
        </div>
      </div>
    );
  }
}

export default About;

