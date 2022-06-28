import React from 'react';
import './SignUp8.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUp8 = () => {
    return (
        <div>
            <img src="./img/SignUP_Page1_LOGO.jpg" alt="" />
            <h5> Merci de vous être abonné à Netflix !</h5>
            <p> Bonjour User,
                Vous pouvez commencer à regarder des films et des séries TV dès maitenant.
            </p>
            <a href="/VideoPresentation.jsx" className="btn btn-danger form-control">Commencer à regarder</a>
        </div>
    );
};

export default SignUp8;