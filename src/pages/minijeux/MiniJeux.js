import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Quizz from '../../components/minijeux/Quizz';

const MiniJeux = () => {
    return (
        <div id='minijeux-page'>
            <Navigation />
            <div className="content">
                <Quizz />
            </div>
        </div>
    );
};

export default MiniJeux;