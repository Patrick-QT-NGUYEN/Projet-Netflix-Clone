import React from 'react';
import './SignUp1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp1 = () => {
    return (
<div className="card configuration">
  <img src="./img/SignUP_Page1_Screens.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">ETAPE 1 SUR 3</h5>
    <h2 className="card-title"> Complétez la configuration de votre compte </h2>
    <p className="card-text">Netflix est personnalisé selon vos <br/> goûts. Créez un mot de passe pour <br/> regarder Netflix quand vous voulez <br/>, où vous voulez.</p>
    <a href="/SignUp2" className="btn btn-danger form-control">Suivant</a>
  </div>
</div>
    );
};

export default SignUp1;