import React, { Component } from 'react';
import Layout from "../../components/Layout";
import ContactpageCards from '../../components/ContactpageCards';
import ContactForm from  '../../components/ContactForm';

export default class Contact extends Component {
    render() {
        return (
            <Layout>
               <ContactpageCards/>
               <ContactForm/>
            </Layout>
        )
    }
}
