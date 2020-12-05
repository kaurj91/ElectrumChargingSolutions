import React from 'react';
import Card from "./Card";
import Consultation from '../../icons/consultation.png';
import Onsite from '../../icons/onsite.png';
import Installation from '../../icons/installation.png';


const ContactpageCards = () =>{

    const cardInfo =[
       {
            image:Consultation,
            title1:'Schedule a ',
            title2:'Consultation',
            class:'consultation'
        },
        {
            image:Onsite,
            title1:'Schedule an ',
            title2:'Onsite',
            class:'onsite'
        },
        {
            image:Installation,
            title1:'Installation ',
            title2:'Process',
            class:'installation',
        }
    ]
        
    
    return (
        <section className="contact-cards">
        <h2>How can we help?</h2>
        <div>
        {cardInfo.map(item=>{
            return (
                <Card title1={item.title1}
                      title2={item.title2}
                       image={item.image}
                       class={item.class}
                />
            
            )
        })}
        </div>
        
        <button type="button">Schedule</button>
        
        </section>
    )
}

export default ContactpageCards;