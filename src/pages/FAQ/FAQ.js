import React, { Component } from 'react';
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import EMotive from "../../components/EMotive";
import FloatingActionButton from '../../components/FloatingActionButton';

export default class FAQ extends Component {
    render() {
        return (
            <Layout>
                
                <FloatingActionButton />
                <Header/>
                <Accordion/>
                <EMotive />

            </Layout>
        )
    }
}
