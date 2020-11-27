import React from "react";
import { Link } from 'gatsby';

const Card = (props) => {
    return (
        <article className={props.class}>
            
           <div className="icon">
                <img src={props.img} alt=""/>
           </div>
            <div className="content">
                    <h3>{props.title}</h3>  
                    <img src={props.img} alt=""/>
                    <p>{props.description}</p>
                    <button type="button"><Link to={props.url}>{props.button}</Link></button>
            </div>
            
            
            
        </article>
    )
}

export default Card;