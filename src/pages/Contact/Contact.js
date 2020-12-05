import React, { Component } from 'react';
import Layout from "../../components/Layout";
import ContactForm from  '../../components/ContactForm';
import ContactCards from "../../components/ContactCards";

export default class Contact extends Component {
    render() {
        return (
            <Layout>
                <ContactCards />
               <ContactForm/>
               

            </Layout>
        )
    }
}
