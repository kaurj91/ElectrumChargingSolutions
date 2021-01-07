import React, { useState } from 'react'
import { cardInfo } from './Data';
import Card from './Card.js';
import { BsChevronRight,BsChevronLeft } from 'react-icons/bs';


const Services = () => {
    const length=cardInfo.length;
    const [current,setCurrent] =useState(0);
    

    const prevSlide = () =>{
        
            if(current===0) {
                setCurrent(length-1);
            } else {
                setCurrent(current-1);
            }

            
              
    }

    const nextSlide = () =>{

        if(current === length-1) {
            setCurrent(0);
        }  else {
            setCurrent(current+1);
        }
        
    }
    return (
        <>
        <section className="services-sm">
           <h2>Our Services</h2>
           <div className="slider">
           <BsChevronLeft className="leftArrow" onClick={prevSlide}/>
           <div className="service">
           
           {cardInfo.map((item,index)=>{
               if(index===current) {
                return (
                   <Card  item={item} index={index} />
               )
               }

              
              
           })}
           
           </div>
           <BsChevronRight className="rightArrow" onClick={nextSlide}/>
           </div>
          
          
        </section>
        <section className="services-lg">
           <h2>Our Services</h2>
          
          
           <div className="service">
           
           {cardInfo.map((item,index)=>{
             
                return (
                   <Card  item={item} index={index} />
               )
               

              
              
           })}
           
           </div>
           
          
          
        </section>
        </>
    )
}

export default Services;
