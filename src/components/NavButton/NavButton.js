import React, { Component } from 'react'

export default class NavButton extends Component {
    render() {
        return (
            <div className="nav-button-wrapper">
                <span className="nav-button-text">{this.props.text}</span>
                <button className="nav-button" onClick={event =>  window.location.href=this.props.nav}>{this.props.button}</button>
                
            </div>
        )
    }
}
