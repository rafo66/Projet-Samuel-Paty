import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Title from '../../components/title/Title';
import ArrowUp from '../../components/arrow-up/ArrowUp';

const Projet = () => {
    return (
        <div id='projet'>
            <Title />
            <Navigation />
            <ArrowUp />
            <div className="content">
                <h1>Projet</h1>
            </div>
        </div>
    );
};

export default Projet;