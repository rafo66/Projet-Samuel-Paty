import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Quizz from '../../components/minijeux/Quizz';

import GamesMenu from '../../components/minijeux/GamesMenu';


const MiniJeux = () => {
    return (
        <div id='minijeux-page'>
            <Navigation />
            <div className="content">
                <div className="gameMenu">
                    <GamesMenu/> 
                </div>
            </div>
        </div>
    );
};

export default MiniJeux;