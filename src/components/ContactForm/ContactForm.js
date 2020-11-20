import React  from 'react';
import { businessInfo } from '../../theme/bussinesInfo';

const ContactForm = () => {
    
    return (

        <section className="contact">
            
            <form action="">
            <div className="row">
                <div className="field">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" value=""/>
                </div>
                <div className="field">
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" value=""/>
                    </div>
            </div>
            <div className="row">
                <div className="field">
                    <label for="email">Email</label>
                    <input type="email" id="email" value="" />
                    </div>
                    <div className="field">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" value="" />
                </div>
                </div>
            <div className="row">
                <div className="field">
                    <label for="reason">Reason for contact</label>
                    <select name="reason" id="reason">
                        <option value="">Option 1</option> 
                        <option value="">Option 2</option>      
                        <option value="">Option 3</option>       
                        
                    </select>
                </div>
                
                <div className="field">
                    <label for="province">Province</label>
                    <select name="province" id="province">
                        <option value="">British Columbia</option> 
                        <option value="">Alberta</option>      
                        <option value="">Ontario</option>       
                    </select>
                </div>
            </div>
                
            <div className="row">
                <div className="field">
                <label htmlFor="">Message</label>
                <textarea  rows="7" ></textarea>
                </div>
            </div>
                <div className=" field submit">
                  <input type="submit" value="Submit"/>
                </div>
                    
            </form>
           <article >
              <div className="map">
              <iframe frameBorder="0" style={{ width: "100%", height: "250px"}} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.2143907285185!2d-122.69980768484184!3d49.177518279320026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d1468161bdb1%3A0x3a7565ea47ae76f0!2sElectrum%20Charging%20Solutions!5e0!3m2!1sen!2sca!4v1605897688537!5m2!1sen!2sca">
            </iframe>

              </div>
              <div className="contact-info">
                  <ul>
                      <li>tel:{businessInfo.phone}</li>
                      <li>email:{businessInfo.email}</li>
                      <li>address:{businessInfo.address}, {businessInfo.location}</li>
                  </ul>
              </div>
           </article>
        </section>
        
    )
}

export default ContactForm;


