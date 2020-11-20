import React, { Component } from 'react';
import Layout from "../../components/Layout";
import ContactForm from  '../../components/ContactForm';

export default class Contact extends Component {
    render() {
        return (
            <Layout>
               <ContactForm/>

            </Layout>
        )
    }
}
