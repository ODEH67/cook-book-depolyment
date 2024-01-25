import {useContext} from "react";
import HeaderImg from '../img/Header/logo33.png';
import { NavLink } from "react-router-dom";
import "../CSS-files/cook-book-homepage-header.css"


export default function Header({setSelectedCategory}) {



    return (
        <header className='header'>
        <div className="header-menu-box">
            <div id="header-menu-logo">
            <NavLink to="/"><img id="logo" src={HeaderImg} alt="logo"/></NavLink>
            </div>
            <nav id="nav-header">
                <input type="checkbox" id="menu-button"/>
                <label htmlFor="menu-button"><span className="material-symbols-rounded">menu</span></label>
                <ul className="header-menu">
                <li><NavLink id="header-click" className="home-head"  to="/">Home</NavLink></li>
                    <li><NavLink id="header-click" onClick={() => setSelectedCategory("Sweets")} to="">Sweets</NavLink></li>
                    <li><NavLink id="header-click" onClick={() => setSelectedCategory("Breakfast")} to="">Breakfast</NavLink></li>
                    <li><NavLink id="header-click" onClick={() => setSelectedCategory("Lunch")} to="">Lunch</NavLink></li>
                    <li><NavLink id="header-click" onClick={() => setSelectedCategory("Dinner")} to="">Dinner</NavLink></li>
                    <li><NavLink id="header-click" onClick={() => setSelectedCategory("All")} to="">All</NavLink></li>
                </ul>
            </nav>
        </div>
        <div className="header-text">
            <h1 id="h1-head">Simple recipes for &lt;<span id="lazy"><strong>LAZY</strong></span>&gt; coders</h1>
            <p id="title-underline">_______________</p>
            <div className="title-text">
                <p id="white-text">Too much coding & no time for cooking? you are not alone, we got you covered with some
                    quick recipes</p>
            </div>
            <div className="button-div">
                <NavLink to="/add" ><button id="header-button">Add  Recipe</button></NavLink>
            </div>
        </div>
    </header>
    )
}