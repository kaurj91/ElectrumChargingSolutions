import React, { Component } from 'react'
import Layout from '../../Components/Layout';
import NavButton from "../../components/NavButton";

export default class Products extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <h1>Products Page
                    </h1>
                    <NavButton text="Need help with our products and services?" button="Contact us today!" nav="/Contact"/>
                </Layout>
               
            </div>
        )
    }
}
