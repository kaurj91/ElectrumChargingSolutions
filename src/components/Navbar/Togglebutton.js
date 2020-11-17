import React from 'react';


const Togglebutton = (props) => {
    return (

    
    <div className="toggle-button" onClick={props.click}>
         <div className="toggle-button-line"></div>
         <div className="toggle-button-line"></div>
         <div className="toggle-button-line"></div>
    </div>
    )
}

export default Togglebutton ;