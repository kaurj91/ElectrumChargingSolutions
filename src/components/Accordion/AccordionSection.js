import React, { useState } from 'react';
import { BsChevronDown,BsChevronUp } from "react-icons/bs";
import {FiMinus, FiPlus} from "react-icons/fi";

const AccordionSection = ({accordion,index,toggle}) =>{

    const [faqs,setFaqs] =useState(accordion.faqs)
   

   const subToggle =(i) =>{
      setFaqs(faqs.map((faq,index)=>{
              if(i===index) {
                faq.openState= !faq.openState
              } else {
                 faq.openState=false;
              }
              return faq;
      }))
  }
    
    
   
    return (
        <>
        <article key={index} >
          
           <button className= "list" onClick={()=>{toggle(index)}} style={accordion.open?{backgroundColor:"#F6AB3E"}:{backgroundColor:"#3caa9c"}}>
               <span className="title" >{accordion.title}</span>
               <span className="chevron">{accordion.open? <BsChevronUp/>:<BsChevronDown/>}</span>
           </button>
          
           <ul className="accord" >
           
           {accordion.open  ? <div className="icon"><img  src={accordion.icon} alt=""/><h3>{accordion.title}</h3></div>:null }

            {faqs.map((faq,i)=>{return (
                accordion.open ? <li className="faq"  key={i} style={faq.openState?{padding:"0px 20px"}:{padding:"55px 20px"}}>
                
                 <button className="faq"   onClick={()=>{subToggle(i)}}>
                   
                   <span className="icon">{faq.openState ?<FiMinus/>: <FiPlus/>}</span>
                   <span>{faq.ques}</span>
                </button>
                {faq.openState ?null:<hr/>}
                {faq.openState  ? <p>{faq.ans}</p>: null}
                
             </li> : null 
               
        
            )})} 

             
          </ul> 
          
          
         
       </article>


     
     </>  
    )
}

export default AccordionSection;