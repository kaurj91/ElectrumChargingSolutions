import React from 'react';

const card = (props) => {
return (


    <article className={props.class}>
        
        <img src={props.image} alt=""/>
        <h3>{props.title1}<br/>{props.title2}</h3>
    </article>

)
}
export default card;