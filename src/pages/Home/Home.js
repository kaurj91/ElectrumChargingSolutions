import React, { Component } from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';
import Layout from "../../components/Layout";
import Header from "../../components/Header";

export default class Home extends Component {
    render() {
        return (
            <Layout>
                
                    
                    <FloatingActionButton></FloatingActionButton>
                    <Header />
            </Layout>
        )
    }
}
