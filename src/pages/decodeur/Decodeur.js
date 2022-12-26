import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import ArrowUp from '../../components/arrow-up/ArrowUp';
import Quizz from '../../components/quizz/Quizz';

const Decodeur = () => {
    return (
        <div id='decodeur'>
            <Navigation />
            <ArrowUp />
            <div className="content">
                <Quizz />
            </div>
        </div>
    );
};

export default Decodeur;