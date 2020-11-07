import React, { Component } from 'react';
import Button from "./Button";
import Calendar from "../../icons/Schedule Call.png";
import "./floatingActionButton.scss";

export default class FloatingActionButton extends Component {
    render() {
        return (
            <div className="fab">
                <Button color="#267C85" icon={Calendar} />
                <Button color="#3caa9c" icon={Calendar} />

        </div>    
        )
    }
}
