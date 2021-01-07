import React, { Component } from 'react'
import Layout from "../../components/Layout";
import Link from 'gatsby-link';
import FloatingActionButton from '../../components/FloatingActionButton';

import EVmobile from "./EVmobile"
import EVdesktop from "./EVdesktop"
import Header from "../../components/Header";


export default class EVIncentives extends Component {
    constructor(props) {
        super(props);
        this.state = {isMobile: false};
        this.updatePredicate = this.updatePredicate.bind(this);
        this.content = [{
            title: "For Homes",
            content: 
            (<> 
                <h3>Home Charging Incentive</h3>
                <p>Single-family homes: Up to 50% of 
                    purchase and installation costs 
                    of eligible, new, Level 2 charging equipment, 
                    to a maximum of $700 per approved charging station.</p>
                <h3>Multi-Residential Building Charging Incentive</h3>
                <p>Condo and apartments receive up to 50% 
                    of purchase and installation costs of eligible, 
                    new Level 2 (208-volt or 240-volt) charging stations or 
                    energised outlets. Rebates depend on when the building was constructed 
                    with respect to municipal bylaws.</p>
            </>),
            image: "ForHomes",
            subtitle: (
                <>
                    <h3>Home Charging Incentive</h3>
                    <h3>Multi-Residential Building Charging Incentive</h3>
                </>
                )
        }, 
        {
            title: "For the Workspace",
            content: 
            (<> 
                <h3>Employee Workplace Charging Incentive</h3>

                <p>Single-family homes: Up to 50% of purchase 
                    and installation costs of eligible, new, 
                    Level 2 charging equipment, to a maximum of 
                    $700 per approved charging station.</p>
            </>),
            image: "Workspace",
            subtitle: (<h3>Employee Workplace Charging Incentive</h3>)
        }, 
        {
            title: "Other Programs",
            content: 
            (<> 
                <h3>SCRAP-IT</h3>
                <p>Trade in your old gas car for an electric car 
                    and receive up to $6,000 for purchasing a brand 
                    new vehicle or up to $3,000 for one used. 
                    For more information, visit SCRAP-IT.</p>
                    
                <img src={require("../../images/logo_scrapit.png")}></img>
                <h3>Specialty Use Electric Vehicle Program</h3>
                <p>The Province of British Columbia offers between 
                    $20,000-$50,000 for specialty use electric vehicles 
                    such as heavy duty trucks and buses. For more information, 
                    visit Speciality Use Electric Vehicle Program.</p>
                <h3>Fleet Champions Program</h3>
                <p>Fleet managers are eligible to receive EV suitability assessments 
                    on less than 10 vehicles. For more information, visit Fleet Champions Program.</p>
            </>),
            image: "ev-station-evb32",
            subtitle: (
                <>
            <h3>Specialty Use Electric Vehicle Program</h3>
            <h3>Fleet Champions Program</h3>
            </>)
        }]
        }

        componentDidMount() {
            this.updatePredicate();
            window.addEventListener("resize", this.updatePredicate);
          }

        componentWillUnmount() {
            window.removeEventListener("resize", this.updatePredicate);
          }

        updatePredicate() {
            this.setState({ isMobile: window.innerWidth < 450 });
          }

    render() {

        return (
            <Layout>
                 <FloatingActionButton />
                 <Header />
                <div className="EVincentives">
                    <h1>Electric Vehicle Incentive Programs</h1>
                    {(this.state.isMobile)?
                    (<EVmobile content = {this.content}/>):(<EVdesktop content ={this.content}/>)}
                    <h6>Apply now</h6>
                    <p className="description">You can check your eligibility at the BC Hydro website. Learn how much you can save with these programs.</p>
                    <div className="contact"><Link to="/Contact">Contact us to learn more</Link></div>
                    </div>


               
               
            </Layout>
        )
    }
}
