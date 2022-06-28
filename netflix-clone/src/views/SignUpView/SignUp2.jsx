import React from 'react';
import './SignUp2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp2 = () => {
    return (
      <div>
        <div className="card configuration">
          <div className="card-body">
      <h5 className="card-title"> ETAPE 2 SUR 4 </h5>
      <h2 className="card-title"> Sélectionnez le forfait qui vous convient. Vous pouvez changer de forfait à tout moment</h2> <br/>
      <div class="d-grid gap-2 col-6 mx-auto butpackage">
        <button class="btn btn-danger" type="button">Essentiel</button>
        <button class="btn btn-danger" type="button">Standard</button>
        <button class="btn btn-danger" type="button">Premium</button>
        <a href="/SignUp3" className="btn btn-danger form-control">Suivant</a>
        </div>
      </div>
      </div>
      </div>
    );
};

export default SignUp2;

