import React, { Component } from 'react';
import { Router } from "@reach/router";
import EVIncentives from "./EVIncentives";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import "../sass/style.scss";
import Layout from '../components/Layout'


export default class index extends Component {
    render() {
        return (
                <Layout>
                    <Router>
                        <Home path="/" />
                        <Products path="/Products" />
                        <FAQ path="/Faq" />
                        <EVIncentives path="/EVIncentives" />
                        <Contact path="/Contact" />
                    </Router>
                </Layout>
        )
    }
}
