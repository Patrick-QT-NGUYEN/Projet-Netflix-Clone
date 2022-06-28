import React from 'react';
import './PubComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PubComponent = () => {
    return (
        <div className='PubComponent'>
            <hr className='hrStyle'/>
            <div class="d-flex justify-content-between">
                <div class="p-2 flex-fill col-4">
                    <h1><b>Regardez Netflix sur votre TV.</b></h1>
                    <h2>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.
                    </h2>
                </div>
                <div class="p-2 flex-fill col-4">
                    <img src="../../../../img/Netflix_tv.png"
                        alt='Netflix TV' className='imagePub' />
                </div>

            </div>
            <hr className='hrStyle'/>
            <div class="d-flex">
                <div class="p-2 flex-fill col-4">
                    <img src="../../../../img/Netflix_mobile.jpg"
                        alt='Netflix mobile' className='imagePub' />
                </div>
                <div class="p-2 flex-fill col-4">
                    <h1><b>Téléchargez vos séries préférées pour les regarder hors connexion.</b></h1>
                    <h2>Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</h2>
                </div>
            </div>
            <hr className='hrStyle'/>
            <div class="d-flex">
                <div class="p-2 flex-fill col-4">
                    <h1><b>Où que vous soyez.</b></h1>
                    <h2>Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.</h2>
                </div>
                <div class="p-2 flex-fill col-4">
                    <img src="../../../../img/Netflix_device-pile.png"
                        alt='Netflix TV' className='imagePub' />
                </div>
            </div>
            <hr className='hrStyle'/>
            <div class="d-flex">
                <div class="p-2 flex-fill col-4">
                    <img src="../../../../img/Netflix_Jeunesse.png"
                        alt='Netflix TV' className='imagePub' />
                </div>
                <div class="p-2 flex-fill col-4">
                    <h1><b>Créez des profils pour les enfants.</b></h1>
                    <h2>Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.
                    </h2>
                </div>
            </div>
            <hr className='hrStyle'/>
            <br />
        </div>
    );
};

export default PubComponent;