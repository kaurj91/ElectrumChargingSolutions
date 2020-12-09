import React, { Component } from 'react';
import Layout from "../../components/Layout";

import ContactForm from  '../../components/ContactForm';
import ContactCards from "../../components/ContactCards";
import NavButton from "../../components/NavButton";

export default class Contact extends Component {
    render() {
        return (
            <Layout>
            
                <ContactCards />
               <ContactForm/>

               <NavButton text="Want to know about your products?" button="Visit products" nav="/Products"/>

            </Layout>
        )
    }
}
