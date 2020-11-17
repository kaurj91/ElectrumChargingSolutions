import React, { Component } from 'react'



export default class ButtonDrawer extends Component {
    render() {
        return (
            <div className="fab-drawer-wrapper" style = {{ backgroundColor: this.props.color}} >
                <span className="fab-text">{this.props.text}</span>
                
            </div>
        )
    }
}
