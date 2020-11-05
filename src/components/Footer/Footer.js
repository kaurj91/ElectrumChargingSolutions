
 import React from 'react';
 import { Router } from "@reach/router";
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
                    <p><a href="/faq">FAQ</a></p>
                    <p><a href="/incentives">EV Incentive Programs</a></p>
                    <p><a href="/products">Our Products</a></p>
                    <p><a href="/contact">Contact us</a></p>
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