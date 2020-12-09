import React, { Component } from 'react';
import EMotiveLogo from "../../images/logo_emotive.png";

export default class EMotive extends Component {
    render() {
        return (
            <div className="emotive-wrapper">
                <div className="guide-wrapper">
                    <span className="guide-title">Guide to Electric Vehicles</span>
                    <p className="guide-text">
                        Refer to this complimentary Electric Vehicle (EV) Guide for information on both used and brand new <br />
                        EVs. After you’ve selected one that suits your needs, contact us for your EV charging station and <br/>
                        accessory needs. 


                    </p>   
                    <input type="button" value="EV Guide" className="ev-button" /> 
                </div>
                <div className="emotive-logo-wrapper">

                    <img src={EMotiveLogo} alt="emotive" className="evmotive-logo"/>
                </div>
                
            </div>
        )
    }
}
