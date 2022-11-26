import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div id='home'>
            <Navigation />
            <div className="content">
                <h1>Acceuil</h1>
                <div className='grid' id='grid1'>
                    <div id='left'>
                        <h1>Une Fake News, c'est quoi ?</h1>
                    </div>
                    <div id='right'></div>
                </div>
                <div className='grid' id='grid2'>
                    <div id='left'></div>
                    <div id='right'></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;