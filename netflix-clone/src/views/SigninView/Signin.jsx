import React from 'react';
import './Signin.css';

const Signin = () => {
    return (
        <body>
        <div>
            <h1>S'identifier</h1>
            <input placeholder='E-mail ou numéro de téléphone' type="text"/><br />
            <input placeholder='Mot de passe' type="password"/><br />
            <button>S'identifier</button>
            <h4>Nouveau sur Netflix ?<a>Inscrivez-vous</a></h4>
            
           
        </div>
        </body>
    );
};

export default Signin;