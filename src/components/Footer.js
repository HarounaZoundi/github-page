import React from 'react';
import '../css/Footer.css';

function Footer() {
    return(
            <div className="container-fluidd-flex justify-content-center  footer" >
                <div className="row links-wrapper">
                   
                    <div className="col-sm-1 link">
                        <a className="media" href="https://www.linkedin.com/in/harounazoundi/" target="_blank">LinkedIn</a>
                    </div>
                    <div className="col-sm-1 link">
                        <a className="media" href="https://github.com/harounazoundi" target="_blank">Github</a>
                    </div>
                    <div className="col-sm-1 link">
                        <a href="mailto:Harouna.zoundi1@gmail.com">Harouna.zoundi1@gmail.com</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <p>&copy; 2020 by Harouna Zoundi</p>
                    </div>
                </div>
            </div>
    
    )
   
}
export default Footer;