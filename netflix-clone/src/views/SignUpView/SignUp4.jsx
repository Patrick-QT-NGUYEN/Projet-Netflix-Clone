import React from 'react';
import './SignUp4.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp4 = () => {
    return (
        <div className="card configuration">
            <div className="card-body">
                <h5 className="card-title">ETAPE 4 SUR 4</h5>
                <h2 className="card-title"> Définissez votre mode de paiement.</h2>
                <p className="card-text"> Votre abonnement commence immédiatement après la configuration de votre paiement. <br /> Sans engagement. Abonnement annulable en ligne à tout moment </p>
                <div class="d-grid gap-2 col-6 mx-auto butpackage">
                    <button class="btn btn-danger" type="button">Carte de crédit</button>
                    <a href="/SignUp7" className="btn btn-danger form-control">Suivant</a>
                    <button class="btn btn-danger" type="button">Paypal</button>
                    <a href="/SignUp6" className="btn btn-danger form-control">Suivant</a>
                    <button class="btn btn-danger" type="button">Code cadeeau</button>
                    <a href="/SignUp5" className="btn btn-danger form-control">Suivant</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp4;
