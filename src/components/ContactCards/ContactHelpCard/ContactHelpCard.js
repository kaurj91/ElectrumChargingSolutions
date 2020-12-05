import React, { Component } from 'react'

export default class ContactHelpCard extends Component {
    render() {
        return (
            <div className="card-wrapper" style = {{ backgroundColor: this.props.color}}>
                <span className="card-description">{this.props.description}</span>
                <img src={this.props.icon} alt="contact-icon" className="card-icons"/>
                
            </div>
        )
    }
}
