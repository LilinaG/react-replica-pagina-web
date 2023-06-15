import NonColorButton from "./NonColorButton";
import './navbar.css';
import './nonColorButton.css';

function Navbar() {
    return (
    <>
     <header> 
        <div className="navbar-logo"><img src="../src/assets/images/logo.svg"/></div>

        <nav className="menu">
            <a href="#description">DESCRIPTION</a>
            <a href="#section-tracking">FEATURES</a>   
            <a href="#container-icons-numbers">SCREENS</a>   
            <a href="#">EXTRA</a>
            <img src="../src/assets/images/down-arrow.png" className="arrow"/>
        </nav>

        <div className="download">
            <NonColorButton button_content={'DOWNLOAD'}></NonColorButton>
        </div> 
    </header>
       

    </>
      
    );
}
export default Navbar;





