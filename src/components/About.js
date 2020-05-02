  import React from 'react';
  import Typical from 'react-typical';
  import '../css/About.css';
  //import Particles from 'react-particles-js';

  function AboutMe(props) {
    return (
      <div className="container-fluid">
        <div className =" col about-me">
            <div className="row">
              <h1> Hello, I'm <stong className="myName">Harouna Zoundi</stong>.<br/>
                <Typical
                  steps={[
                    'I am a fullstack web developer',
                    500
                  ]}  
                  />
            </h1> 
            </div>
        </div>
      </div>
      
    );
  }
  
  export default AboutMe;