import React from 'react';
import './NavBarComponent.css';
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



const NavBarComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <div id="navbar">
                    <button className='bouton'>
                        <Link to="/">Home</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/SignIn">S'identifier</Link>
                    </button>
                    <button className='bouton'>
                        <Link to="/SignUp1">S'inscrire</Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/SignIn" element={<Signin/>} />
                    <Route path="/SignUp1" element={<SignUp1/>} />
                    <Route path="/SignUp2" element={<SignUp2/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default NavBarComponent;


