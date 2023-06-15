import NonColorButton from "./NonColorButton";
import './navbar.css';
import logo from '../../assets/images/logo.svg';
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <>
    <header className="header-container">
        <nav>
            <img src={logo} className="navbar-logo"/>
            <ul className="menu">
                <Link to='/Description'><li>DESCRIPTION</li></Link>
                <Link to='/Tracking'><li>FEATURES</li></Link>
                <Link to='/UserTerstimonials'><li>SCREENS</li></Link>
                <Link to='/Numbers'><li>EXTRA</li></Link>
                <li><a href="https://factoriaf5.org"/><NonColorButton>DOWNLOAD</NonColorButton></li>
            </ul>
        </nav>
    </header>
    </>
      
    );
}
export default Navbar;





