import React from 'react';
import './common.css';

const section_container=(props)=>{
    return(
        <div className="section_container">
            {props.children}
        </div>
    )
}
export default section_container;