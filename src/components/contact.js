import React, {Component} from 'react';
import '../css/Contact.css';


function Contact() {
    return(
            <div className="container-fluid  d-flex justify-content-center contact" id="Contact">
                <div className="row">
                <h3>Contact Me</h3>
                </div>
                <div  className="row">
                  <form id="contact-form" >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"  />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
            </div>
    
    )
   
}
export default Contact;
//-----------------------------------------
