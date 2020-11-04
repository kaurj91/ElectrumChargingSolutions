import React, { Component } from 'react';
import { Router } from "@reach/router";
import EVIncentives from "./EVIncentives";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Footer from "../components/Footer"
import "../sass/style.scss";


export default class index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Home path="/" />
                    <Products path="/products" />
                    <FAQ path="/faq" />
                    <EVIncentives path="/incentives" />
                    <Contact path="/contact" />
                </Router>

                <Footer />
            </div>
        )
    }
}
