
import React, { useState } from "react";
import DropUp from '../../assets/icons/dropUp.svg';
import DropDown from '../../assets/icons/dropDown.svg';
import { object } from "prop-types";

export default function EVbox({contentBox}) {
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="box">
            <h2>{contentBox.title}</h2>
            <img src={require('../../images/'+contentBox.image+".png")}></img>
            {(dropDown)?(            <div>
                {contentBox.subtitle}
            </div>):(
            <div>
                {contentBox.content}
            </div>)}
            { (dropDown)?
            (<DropDown onClick={()=>{setDropDown(false)}}/>):
            (<DropUp onClick={()=>{setDropDown(true)}}/>)
            }
        </div>
    )
}
