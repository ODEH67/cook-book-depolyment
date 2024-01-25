import { NavLink } from "react-router-dom";
import '../App.css';
import '../CSS-files/cook-book-ingredients-header.css';
import HeaderLogo from "../img/Header/logo33.png";
import { useState } from "react";


export default function IngredientsHeader() {


    return (
        <header className="Ingredients-Header">
        <div className="Ingredients-header-menu-box">
            <div id="Ingredients-header-menu-logo">
                <NavLink  to="/"><img id="Ingredients-logo" src={HeaderLogo} alt="logo"/></NavLink>
            </div>
            <nav id="Ingredients-nav-header">
                <input type="checkbox" id="Ingredients-menu-button"/>
                <label htmlFor="Ingredients-menu-button"><span className="material-symbols-rounded">menu</span></label>
                <ul className="Ingredients-header-menu">
                    <li><NavLink id="Ingredients-header-click" to="/">Home</NavLink></li>
                    <li><NavLink id="Ingredients-header-click" to="">Sweets</NavLink></li>
                    <li><NavLink id="Ingredients-header-click" to="">Breakfast</NavLink></li>
                    <li><NavLink id="Ingredients-header-click" to="">Lunch</NavLink></li>
                    <li><NavLink id="Ingredients-header-click" to="">Dinner</NavLink></li>
                    <li><NavLink id="Ingredients-header-click" to="">About</NavLink></li>
                </ul>
            </nav>
        </div>
        <div className="ingredients-header-text">
            <h1 id="Ingredients-h1-head">Add your lazy recipe ..
            {/* <span id="Ingredients-lazy"><strong>Soup</strong></span> */}
            </h1>
            <p id="Ingredients-title-underline">__________</p>
        </div>
    </header> 
    )
}