
import React , {useState} from "react";
import { accordionInfo } from './data.js';
import AccordionSection from './AccordionSection';

const Accordion = () => {

   
 
   const [accordions,setAccordions] =useState(accordionInfo)
   

   const toggle =(index) =>{
      setAccordions(accordions.map((accordion,i)=>{
              if(i===index) {
                accordion.open= !accordion.open
              } else {
                  accordion.open=false;
              }
              return accordion;
      }))
  }

return (
        <section className="faq" >
        <h2>Frequently Asked Questions</h2>
         
        {accordions.map((accordion,index)=>{return (
           
           <>
           <AccordionSection  accordion={accordion} index={index} toggle={toggle}/>
           
          </>
           
       )})}
       
     </section>
    )
}

export default Accordion;


