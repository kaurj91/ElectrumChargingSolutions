import React, { Component } from 'react';
import Button from "./Button";
import ButtonDrawer from "./ButtonDrawer";
import Calendar from "../../icons/Schedule Call.png";
import Mobile from "../../icons/mobile.png";

export default class FloatingActionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }
    



    render() {
    

        return (
            <div className="fab">
                <div className="fab-drawer-layout">
                    
                    <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                        <div>
                         {this.state.hover && <ButtonDrawer color="#267C85" text="Get on an instant Phone Consultation" />}
                        </div>
                        <Button color="#267C85" icon={Mobile} />
                    </div>
                </div>
                <div className="fab-drawer-layout">
                    <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                        <div>
                            { this.state.hover && <ButtonDrawer color="#3caa9c" text="Schedule a Phone Consultation " />}
                        </div>    
                        <Button color="#3caa9c" icon={Calendar} />
                    </div>    
                </div>

        </div>    
        )
    }
}
