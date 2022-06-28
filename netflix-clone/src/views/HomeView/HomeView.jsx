import React from 'react';
import FAQComponent from '../../components/FAQComponent/FAQComponent';
import PubComponent from '../../components/PubComponent/PubComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import './HomeView.css';

const HomeView = () => {
    return (
        <div>
            <div className="loginScreen">
                <div className="loginScreen_body">
                    <div>
                        <h1>Films, séries TV et bien plus en illimité.</h1>
                        <h2>Où que vous soyez. Annulez à tout moment</h2>
                        <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
                        <div className="loginScreen_input">
                            <form>
                                <input type="email" placeholder="Adresse email" className="btn_input_login" />
                                <button className="btn_button_login">
                                    Commencez
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <PubComponent />
            <FAQComponent />

            <FooterComponent />

        </div>
    );
};

export default HomeView;