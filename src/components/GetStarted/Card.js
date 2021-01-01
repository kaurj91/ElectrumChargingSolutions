import React from 'react'


const Card = ({item,index})=>{

 return (
        <article className="step">
        
        <h5>{item.step}</h5>
            <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            </div>
        
        </article>
    )
}

export default Card;
