
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages

import LandingPage from "../components/pages/LandingPage";
import Description from "../components/pages/Description";
import Tracking from "../components/pages/Tracking";
import UserTestimonials from "../components/pages/UserTestimonials";
import Numbers from "../components/pages/Numbers";
import ContactUs from "../components/pages/ContactUs";


const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path= '/home'  element= {<LandingPage/>}></Route>
                <Route path= '/description' element= {<Description/>}></Route>
                <Route path= '/tracking' element= {<Tracking/>}></Route>
                <Route path= '/user-testimonials' element= {<UserTestimonials/>}></Route>
                <Route path= '/numbers' element= {<Numbers/>}></Route>
                <Route path= '/contact' element= {<ContactUs/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
