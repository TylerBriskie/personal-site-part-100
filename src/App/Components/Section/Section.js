import React from 'react';
import './Section.scss';
const Section = (props) => {
    return(
        <div id={props.sectionName} className={props.theme == 'dark' ?'App-Section dark' : "App-Section"}>
            {props.children}
        </div>
    )
};

export default Section;