import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import ArrowUp from '../../components/arrow-up/ArrowUp';

const Credits = () => {
    return (
        <div id='credits-page'>
            <Navigation />
            <ArrowUp />
            <div className="content">

                <h1>Ce projet collaboratif a été réalisé par :</h1>

                <h2 className='subtitle'>Nos Développeurs :</h2>
                <h2><span>N</span>ils AYMONIN</h2>
                <h2><span>C</span>lément DE WASCH</h2>
                <h2><span>R</span>afaël DOYETTE</h2>

                <h2 className='subtitle'>Nos Rédacteurs :</h2>
                <h2><span>N</span>oah BER</h2>
                <h2><span>A</span>nthony DE ANDRADE</h2>
                <h2><span>T</span>om FORMET</h2>
                <h2><span>A</span>natole JACINTHO</h2>
                <h2><span>E</span>dgar MALERBA</h2>
                <h2><span>M</span>axime RASMUS</h2>
                <h2><span>C</span>yprien RITTER</h2>
                <h2><span>V</span>alentin THEOBALD</h2>

                <h2 className='subtitle'>Nos Monteurs :</h2>
                <h2><span>E</span>lias FADILI</h2>
                <h2><span>L</span>élio MILLARDET</h2>

                <h2 className='subtitle'>Nos Interviewers :</h2>
                <h2><span>E</span>mmanuel BOMBAKA</h2>
                <h2><span>M</span>attéo KOSTULSKI</h2>
                <h2><span>T</span>homas L'HOSTETE</h2>
                <h2><span>E</span>nzo MARCOTULIO</h2>
                <h2><span>A</span>lexandre ROGER</h2>

                <h2 className='subtitle2'>Sous la direction de notre professeure</h2><h2 className='subtitle_fin'>d'Enseignement Moral et Civique :</h2>
                <h2><span>M</span>eli THARY</h2>

            </div>
        </div>
    );
};

export default Credits;