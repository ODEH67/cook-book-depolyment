import {useContext} from "react";
import '../App.css';
import '../CSS-files/cook_book_footer.css';
import { NavLink } from "react-router-dom";
import facebook from "../img/Footer/icons8-facebook-96.png";
import twitter from "../img/Footer/icons8-twitter-circled-96.png" ;
import pinterest from "../img/Footer/icons8-pinterest-96.png";
import google from "../img/Footer/icons8-google-plus-circled-96.png";
import instagram from "../img/Footer/icons8-instagram-96.png";
import youtube from "../img/Footer/icons8-youtube-96.png";



export default function Footer() {


    return (
        <>
        <span id="about-footer"></span>
        <footer>
            <div className="left">
                <p className="ready-to">Are you ready to cook?</p>
                <div className="newsletters">
                    <input className="text" type="email" placeholder="Subscribe our newsletter" />
                    <button className="submit">SUBMIT</button>
                </div>
                <div className="social-media">
                    <p className="like">Follow Us On</p>
                    <div className="socialmedia-logos">
                        <div className="facebookimage"><img className="facebook" src={facebook} alt="facebook"/></div>
                        <div className="twitterimage"><img className="twitter" src={twitter} alt="twitter"/></div>
                        <div className="pinterestimage"><img className="pinterest" src={pinterest} alt="pinterest"/></div>
                        <div className="googleimage"><img className="google"  src={google} alt="google"/></div>
                        <div className="instagramimage"> <img className="instagram" src={instagram} alt="instargram"/></div>
                        <div className="youtubeimage"><img className="youtube" src={youtube} alt="youtube"/></div>
                    </div>
                </div>
            </div>
            <div className="middle">
                <ul className="middle-section">
                    <li className="links-bottom"><a className="footer-links" href="#">RECIPES</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">QUICK & EASY</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">IN THE KITCHEN</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">BUYING GUIDES</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">HOLIDAYS & SEASONS</a></li>
                </ul>
            </div>
            <div className="right">
                <ul className="first-section">
                    <li className="links-bottom"><a className="footer-links" href="#">About Us</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">Contact</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">Terms of Use</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">EU Privacy</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">Editorial Guidelines</a></li>
                </ul>
                <ul className="second section">
                    <li className="links-bottom"><a className="footer-links" href="#">Advertise</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">Careers</a></li>
                    <li className="links-bottom"><a className="footer-links" href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="copy-rights"><em>Copyright@2023 - Recipes for lazy coders</em></div>
        </footer>
        </>)
}