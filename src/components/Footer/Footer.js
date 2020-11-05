
 import React from 'react';
 import Link from 'gatsby-link'
 import {businessInfo} from '../../theme/bussinesInfo'
 import Facebook from '../../assets/icons/facebook.svg';
 import Twitter from '../../assets/icons/twitter.svg';
 import Youtube from '../../assets/icons/youtube.svg';


 const Footer = () =>{
    const year = new Date().getFullYear() 
     return (
         <footer className = "footer">
             <div className="footer-info">
                <div>
                    <h3>Electrum Charging Solutions</h3>
                    <p>{businessInfo.address}</p>
                    <p>{businessInfo.location}</p>
                    <p>{businessInfo.email}</p>
                    <p>{businessInfo.phone}</p>
                </div>

                <div className="links">
                    <h3>Find out more</h3>
                    <p><Link to="/Faq">FAQ</Link></p>
                    <p><Link to="/EVIncentives">EV Incentive Programs</Link></p>
                    <p><Link to="/Products">Our Products</Link></p>
                    <p><Link to="/Contact">Contact us</Link></p>
                </div>

                <div className="social-media">
                    <h3>Visit us at</h3>
                    <div className="icons-social">
                        <a  href={businessInfo.facebook}><Facebook /></a>
                        <a  href={businessInfo.twitter}><Twitter /></a>
                        <a  href={businessInfo.youtube}><Youtube /></a>
                    </div>
                </div>
             </div>
             <hr></hr>
             <p className="copyRight">Copyright { year } Electrum Charging Solutions</p>
             <hr></hr>
         </footer>
     )
 }

 export default Footer