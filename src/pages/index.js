import React, { Component } from 'react';
import { Router } from "@reach/router";
import EVIncentives from "./EVIncentives";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import "../sass/style.scss";




export default class index extends Component {
    render() {
        return (
        
                    <Router>
                        <Home path="/" />
                        <Products path="/Products" />
                        <FAQ path="/FAQ" />
                        <EVIncentives path="/EVIncentives" />
                        <Contact path="/Contact" />
                    </Router>
            
        )
    }
}
