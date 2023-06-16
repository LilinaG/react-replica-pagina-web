
import './navbar.css';
import PinkButton from "./PinkButton";
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
                <li><a href="https://factoriaf5.org"/>
                <PinkButton button_content={'DOWNLOAD'}></PinkButton></li>
            </ul>
        </nav>
    </header>
    </>
      
    );
}
export default Navbar;





