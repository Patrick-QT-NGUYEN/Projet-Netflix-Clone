import React from 'react';
import './SignUp6.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp6 = () => {
    return (
        <div className="card configuration">
        <div className="card-body">
            <h5 className="card-title">ETAPE 4 SUR 4</h5>
            <h2 className="card-title"> Configurez votre paiement via Paypal.</h2>
            <p className="card-text">Pour terminer l'inscription, cliquez sur le bouton Continuer vers Paypal et identifiez-vous sur PayPal et identifiez-vous sur PayPal avec votre adresse e-mail et votre mot de passe. </p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Code ou PIN de la carte cadeau" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Utiliser</button>
                <a href="https://www.paypal.com/fr/webapps/mpp/home" className="btn btn-danger form-control">Continuer vers PayPal  <img src="./img/SignUP_Page6_LOGOPayPal.jpg" className="card-img-top" alt="..." /></a>
            </div>
        </div>
    </div>
    );
};
export default SignUp6;

