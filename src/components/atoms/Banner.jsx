import './banner.css'
import iphone from '../../assets/images/header-iphone.png';
import PinkButton from './PinkButton';



function Banner() {
    return (
    <>
    <section id="banner-iphone">
    <div className="banner">
        <h1 className="h1-banner">Mobile App Landing Page</h1>
        <p className="p-banner">Start focusing on your goals and get more things done with Sync mobile applications.
            Its the first app to harness the power of social connections to help you stay focuses
            and get organized</p>
    
    <div className="button-download">

        <PinkButton button_content={'DOWNLOAD'}></PinkButton>
        <PinkButton button_content={'DOWNLOAD'}></PinkButton>

    </div>
    
    <div>
        <img src={iphone} className="header-iphone"/>
    </div>
        
    </div> 

    </section>

    </>
);
}

export default Banner;
