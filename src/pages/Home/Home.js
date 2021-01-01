import React, { Component } from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Cards from '../../components/Cards/Cards';
import NavButton from "../../components/NavButton";
import GetStarted from '../../components/GetStarted';
import Services from '../../components/Services';

export default class Home extends Component {
    render() {
        return (
            <Layout>
                
                    
                    <FloatingActionButton></FloatingActionButton>
                    <Header />
                    <Cards/>
                    <GetStarted/>
                    <Services/>
                    <NavButton text="Need help with our products and services?" button="Contact us today!" nav="/Contact"/>
            </Layout>
        )
    }
}
