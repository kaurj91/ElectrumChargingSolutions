import React from 'react';

const Card = ({item,index}) => {
    return (
        <article className="services" key={index}>
        <img src={item.icon} alt=""/>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>

        </article>
    )
}

export default Card
