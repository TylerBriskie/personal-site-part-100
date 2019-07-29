import React from 'react';
import './Header.scss';
import MainNav from './MainNav/MainNav.js'
const Header = () => {
    return <div className={"App-Header"}>
        <h1>Tyler <span>Briskie</span></h1>
        <MainNav />
        <select>
            <option value="0" selected>Select A Theme</option>
            <option value="vaporwave">Vaporwave</option>
            <option value="chestnut">Chestnut</option>
            <option value="???">???</option>
        </select>
    </div>
};

export default Header;