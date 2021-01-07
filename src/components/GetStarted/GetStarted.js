import React from 'react'
import Card from './Card.js';



function GetStarted() {

    const data=[
        {
            step:'1',
            title:'Consultation',
            desc:'We will work directly with you and personally. Our Energy Solution Specialist will assist you with all of your charging needs.',
        },

        {
            step:'2',
            title:'On-Site',
            desc:'Our specialist will  schedule an onsite visit to conduct load calculations and assess the amount of power you need to your specifications. ',
        },

        {
            step:'3',
            title:'Purchase & Installation',
            desc:'Finally,  it is time to install your  designated charging stations and  fulfil your electric vehicle charging needs..',
        },

    ]

    return (
       <section className="getStarted">
           <h2>The Electrum Process</h2>
           <div  className="steps">
           {data.map((item,index)=>{
               return (
                <Card item={item} key={index}/>
               )
           })}
           </div>
           
          <button id="get-started">Let’s Get You Started</button>
       </section>
    )
}

export default GetStarted;
