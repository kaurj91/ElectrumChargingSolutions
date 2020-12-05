import React, { Component } from 'react'
import ContactHelpCard from "./ContactHelpCard";
import Counselling from "../../icons/counselling.png";
import Visit from "../../icons/visit.png";
import Install from "../../icons/install.png";

export default class ContactCards extends Component {
    render() {
        return (
            <div className="contact-cards-wrapper">
                <span className="cardHeader">How Can We Help?</span>
                <div className="contact-cards">
                    <ContactHelpCard color="#1B4F49" description = "Schedule a Phone Consultation" icon={Counselling}/>
                    <ContactHelpCard color="#267C85" description="Schedule an Onsite Visit" icon={Visit}/>
                    <ContactHelpCard color="#3CAA9C" description="Installation Process" icon={Install}/>
                </div>
                <input type="button" value="Schedule" className="card-button"/>
                <div className="contact-info">
                    <span className="cardHeader">Get on a call with us</span>
                    <span className="contact-tel">Tel: +1(866) - 898 - 3873</span>
                </div>    
            </div>
        )
    }
}
