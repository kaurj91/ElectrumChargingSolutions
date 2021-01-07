import React, { Component } from 'react';
import InstallerLogo from "./InstallerLogo";
import tesla from "../../images/tesla.png";
import porsche from "../../images/Porsche.png";

export default class CertifiedInstallers extends Component {
    render() {
        return (
            <div className="installer-wrapper">
               <div className="wrapper-shadow"> 
                    <div className="ins-wrapper">
                
                        <span className="installer-text">We are certified installers for</span>
                        <div className="installer">
                            <InstallerLogo logo={tesla}  logoText="Tesla Canada"/>
                            <InstallerLogo logo={porsche}  logoText="Porsche Canada"/>

                        </div>

                    </div>
               
                </div>
            </div>
        )
    }
}
