import React, { Component } from 'react';


export default class Button extends Component {
   
    render() {
        return (
            <div style = {{ backgroundColor: this.props.color}} className="button-layout" onClick={event =>  window.location.href='/Contact'}>
                <img src={this.props.icon} alt="icon" className="fab-icon"/>

                
            </div>
        )
    }
}
