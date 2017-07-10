import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className='about' style={{textAlign: 'center'}}>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Contact Me</h3>
            <a href="mailto:alitakendrick121@gmail.com?Subject=Portfolio%20" target="_top" role="button" className="btn btn-default btn-primary col-md-4">Email </a> <br /> <br />
            <a href="https://github.com/AlitaKendrick" role="button" className="btn btn-default btn-primary col-md-4"> GitHub </a> <br /> <br />
            <a href="https://www.linkedin.com/in/alitakendrick/" role="button" className="btn btn-default btn-primary col-md-4"> LinkedIn </a> <br /> <br />
          </div>
          <div className='col-md-6'>
            <h3>About Me</h3>
            <img src="./dist/images/head-shot.gif" height="150" width="150"/>
            <p>Hello! My name is Alita and I am a junior web developer. </p>
             
          </div>
        </div>
      </div>
    );
  }
}

export default About;

