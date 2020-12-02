
import React from 'react'
import Cable from '../../assets/icons/cable.svg';


export default function EVdesktop({content}) {
    return (
        <>
        <h2 className="mainTitle">{content[0].title}</h2>
        <div className="EVdesktop">
            <div className="first-column">
                <h3 style={{marginBottom:"20px"}}>Home Charging Incentive</h3>
                <p style={{marginBottom:"50px"}}>Single-family homes: Up to 50% of purchase and installation costs of eligible, new, Level 2 charging equipment, to a maximum of $700 per approved charging station.</p>
                <h3 style={{marginBottom:"20px"}}>Multi-Residential Building Charging Incentive</h3>
                <p style={{marginBottom:"130px"}}>Condo and apartments receive up to 50% of purchase and installation costs of eligible, new Level 2 (208-volt or 240-volt) charging stations or energised outlets. Rebates depend on when the building was constructed with respect to municipal bylaws.</p>
                <h3 style={{marginBottom:"20px"}}>Employee Workplace Charging Incentive</h3>
                <p style={{marginBottom:"78px"}}>Single-family homes: Up to 50% of purchase and installation costs of eligible, new, Level 2 charging equipment, to a maximum of $700 per approved charging station.</p>
                <h2 style={{marginBottom:"20px"}}>Other Programs </h2>
                <div style={{marginBottom:"60px"}} className="image-first">
                    <img src={require("../../images/logo_scrapit.png")}></img>
                </div>
                <h3>Specialty Use Electric Vehicle Program</h3>
                <p>The Province of British Columbia offers between $20,000-$50,000 for specialty use electric vehicles such as heavy duty trucks and buses. For more information, visit Speciality Use Electric Vehicle Program.</p>
            </div>
            <div className="cable">
                <Cable />
            </div>

            <div className="second-column">
                <img style={{marginBottom:"280px"}} src={require('../../images/'+content[0].image+".png")}></img>
                <h2 style={{marginBottom:"45px"}}>{content[1].title}</h2>
                <img style={{marginBottom:"185px"}} src={require('../../images/'+content[1].image+".png")}></img>
                <h3 style={{marginBottom:"20px"}} >SCRAP-IT</h3>
                <p style={{marginBottom:"210px"}}>Trade in your old gas car for an electric car and receive up to $6,000 for purchasing a brand new vehicle or up to $3,000 for one used. For more information, visit SCRAP-IT.</p>
                <h3 style={{marginBottom:"20px"}}>Fleet Champions Program</h3>
                <p>Fleet managers are eligible to receive EV suitability assessments on less than 10 vehicles. For more information, visit Fleet Champions Program.</p>
            </div>
        </div>
        </>
    )
}
