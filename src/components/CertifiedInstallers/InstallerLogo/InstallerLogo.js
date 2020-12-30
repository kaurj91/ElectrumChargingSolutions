import React, { Component } from 'react';

export default class InstallerLogo extends Component {
    render() {
        return (
            <div className="logo-wrapper">
                 <span className="logo-text">{this.props.logoText}</span>
                <img src={this.props.logo} alt="installerLogo" className="installer-logo" />
               
                
            </div>
        )
    }
}
