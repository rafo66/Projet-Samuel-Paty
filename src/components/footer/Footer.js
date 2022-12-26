import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <p className='p1'>
                    Ce site web à été intégralement réalisé par la classe 712 TSTI2D du lycée Henri Loritz.
                    <br />
                    Il s'inscrit comme document de participation au concours Samuel Paty organisé par l'APHG.
                </p>
                <p className='p2'>
                    <a href='https://www.aphg.fr/Deuxieme-edition-du-Prix-Samuel-Paty'>Consulter le site de l'APGH</a>
                    <br />
                    <a href='https://github.com/mapfire/Projet-Samuel-Paty'>Consulter le GitHub du site</a>
                </p>


            </div>
        </div>
    );
};

export default Footer;