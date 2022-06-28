import React from 'react';
import './SignUp7.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp7 = () => {
    return (
        <div className="card configuration">
            <div className="card-body">
                <h5 className="card-title">ETAPE 4 SUR 4</h5>
                <h2 className="card-title"> Configurez votre carte bancaire.<img src="./img/SignUP_Page6_LOGOPayPal.jpg" className="card-img-top" alt="..." /></h2>
                <input class="form-control" type="text" placeholder="Prénom" aria-label="default input example"></input>
                <input class="form-control" type="text" placeholder="Nom" aria-label="default input example"></input>
                <input class="form-control" type="text" placeholder="Numéro de carte" aria-label="default input example"></input>
                <input class="form-control" type="text" placeholder="Date d'expiration (MM/AA)" aria-label="default input example"></input>
                <input class="form-control" type="text" placeholder="Cryptogramme (CVV)" aria-label="default input example"></input>
                <a href="/SignUp8" className="btn btn-danger form-control">Valider</a>
            </div>
        </div>
    );
};
export default SignUp7;




