import React from 'react';
import './VerticalSelector.scss';

const VerticalSelector = (props) => {

    const {selectedIndex} = props

    return (
        <ul className="vertical-item-selector">
        {
            
            props.items.map((item, index) =>
                {
                    return (
                        <li className={selectedIndex === index ? "selected-item item" : "item"} onClick={() => props.selectItem(index)} >
                            <div key={index} className={"item-subheading"} >
                                <img src={item.thumbnail} alt="Brand Logo"/>
                                <span>{item.subheading}</span>
                            </div>
                            <div className={selectedIndex === index ? "selected-arrow-left" : "arrow-left"}></div>
                        </li>  
                    )}
            
            )
        }

    </ul>
    )

}

export default VerticalSelector;