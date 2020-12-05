import React from 'react'
import EVbox from './EVbox'
import First from '../../assets/icons/first.svg';
import Second from '../../assets/icons/second.svg';
import Third from '../../assets/icons/third.svg';


export default function EVmobile({content}) {
    return (
        <div className="mobile">
            <EVbox contentBox= {content[0]}></EVbox>
            <First/>
            <EVbox contentBox= {content[1]}></EVbox>
            <Second/>
            <EVbox contentBox= {content[2]}></EVbox>
            <Third />
        </div>
    )
}


