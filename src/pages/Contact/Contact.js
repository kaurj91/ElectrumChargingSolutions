import React, { Component } from 'react';
import Layout from "../../components/Layout";
import ContactpageCards from '../../components/ContactpageCards';
import ContactForm from  '../../components/ContactForm';
import ContactCards from "../../components/ContactCards";

export default class Contact extends Component {
    render() {
        return (
            <Layout>
               <ContactpageCards/>
                <ContactCards />
               <ContactForm/>
        
            </Layout>
        )
    }
}
