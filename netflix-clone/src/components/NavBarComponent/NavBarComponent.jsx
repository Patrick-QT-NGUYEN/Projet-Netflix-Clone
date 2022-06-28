import React from 'react';
import './NavBarComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import HomeView from '../../views/HomeView/HomeView';
import Signin from '../../views/SigninView/Signin';
import SignUp1 from '../../views/SignUpView/SignUp1';
import SignUp2 from '../../views/SignUpView/SignUp2';
import SignUp3 from '../../views/SignUpView/SignUp3';
import SignUp4 from '../../views/SignUpView/SignUp4';
import SignUp5 from '../../views/SignUpView/SignUp5';
import SignUp6 from '../../views/SignUpView/SignUp6';
import SignUp7 from '../../views/SignUpView/SignUp7';
import SignUp8 from '../../views/SignUpView/SignUp8';



const NavBarComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <div id="navbar">
                    <div>
                        <Link to="/">
                            <img src="./img/netflix_logo.png" alt="Logo Netflix" className="loginScreen_logo" />
                        </Link>
                    </div>
                    <button className="loginScreen_button">
                        <Link to="/SignIn">S'identifier</Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/SignIn" element={<Signin />} />
                    <Route path="/SignUp1" element={<SignUp1 />} />
                    <Route path="/SignUp2" element={<SignUp2 />} />
                    <Route path="/SignUp3" element={<SignUp3 />} />
                    <Route path="/SignUp4" element={<SignUp4 />} />
                    <Route path="/SignUp5" element={<SignUp5 />} />
                    <Route path="/SignUp6" element={<SignUp6 />} />
                    <Route path="/SignUp7" element={<SignUp7 />} />
                    <Route path="/SignUp8" element={<SignUp8 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default NavBarComponent;


