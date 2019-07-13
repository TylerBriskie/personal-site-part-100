import React from 'react';
import './Header.scss';

const Header = () => {
    return <div className={"App-Header"}>
       <h1>I"M AN HEADER</h1>
        <ul>
            <li>Experience</li>
            <li>Code</li>
            <li>Music</li>
            <li>Resume</li>
        </ul>
        <select>
            <option value="0" selected>Select A Theme</option>
            <option value="vaporwave">Vaporwave</option>
            <option value="chestnut">Chestnut</option>
            <option value="???">???</option>
        </select>
    </div>
};

export default Header;