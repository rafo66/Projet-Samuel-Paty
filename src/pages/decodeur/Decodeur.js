import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Title from '../../components/title/Title';
import ArrowUp from '../../components/arrow-up/ArrowUp';

const Decodeur = () => {
    return (
        <div id='decodeur'>
            <Title />
            <Navigation />
            <ArrowUp />
            <div className="content">
                <h1>Décodeur</h1>
            </div>
        </div>
    );
};

export default Decodeur;