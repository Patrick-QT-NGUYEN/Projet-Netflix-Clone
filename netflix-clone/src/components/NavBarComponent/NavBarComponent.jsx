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
import SignUp from '../../views/SignUpView/SignUp';



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
                        <Link to="/SignUp">S'inscrire</Link>
                    </button>
                </div>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/SignIn" element={<Signin/>} />
                    <Route path="/SignUp" element={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default NavBarComponent;


