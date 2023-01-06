import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import ArrowUp from '../../components/arrow-up/ArrowUp';
import Quizz from '../../components/minijeux/Quizz';
import Footer from '../../components/footer/Footer';

const MiniJeux = () => {
    return (
        <div id='minijeux'>
            <Navigation />
            <ArrowUp />
            <div className="content">
                <Quizz />
            </div>
            <Footer />
        </div>
    );
};

export default MiniJeux;