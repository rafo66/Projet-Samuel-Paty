import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Title from '../../components/title/Title';
import ArrowUp from '../../components/arrow-up/ArrowUp';

const About = () => {
    return (
        <div id='credits'>
            <Title />
            <Navigation />
            <ArrowUp />
            <div className="content">
                <h1>Crédits</h1>
            </div>
        </div>
    );
};

export default About;