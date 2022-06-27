import React from 'react';
import './SignUp2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp2 = () => {
    return (
        <div>
            <div className="card configuration">
  <div className="card-body">
    <h5 className="card-title">ETAPE 1 SUR 3</h5>
    <h2 className="card-title"> Créez un mot de passe pour activer votre abonnement </h2>
    <p className="card-text">Plus que quelques étapes et c'est fini ! <br/> Plus rien à remplir.</p>
   <input placeholder='E-mail' type="email"></input> <br/>
   <input placeholder='Ajouter un mot de passe' type="password"></input>
    <a href="#" className="btn btn-danger form-control">Suivant</a>
  </div>
</div>
        </div>
    );
};

export default SignUp2;