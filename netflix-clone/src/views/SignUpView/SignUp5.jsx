import React from 'react';
import './SignUp5.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp5 = () => {
    return (
        <div className="card configuration">
        <div className="card-body">
            <h5 className="card-title">ETAPE 4 SUR 4</h5>
            <h2 className="card-title"> Configurez votre code cadeau</h2>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Code ou PIN de la carte cadeau" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Utiliser</button>
                <a href="/SignUp8" className="btn btn-danger form-control">Valider</a>
            </div>
        </div>
    </div>
    );
};

export default SignUp5;