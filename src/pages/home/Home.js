import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Footer from '../../components/footer/Footer';
import ArrowUp from '../../components/arrow-up/ArrowUp';
import background from '../../assets/img/home-background.png';
import news_illustration from '../../assets/img/news-illustration.png';
import democratie_illustration from '../../assets/img/democratie-illustration.png';

const Home = () => {
    return (
        <div id='home-page'>
            <Navigation />
            <ArrowUp />
            <div className="content">
                <div className='title-container'>
                    <img className='image' id="background" src={background} alt="arrière plan" />
                    <div className='title'><h1>« Les infox : quels dangers pour la démocratie ? »</h1></div>
                </div>
                <div className='grid'>
                    <div className='element' id="element1">
                        <h2>Infox</h2>
                        <p>L'infox (ou désinformation) est de l'information erronée ou trompeuse diffusée intentionnellement ou non pour influencer les opinions ou les croyances d'un individu ou d'un groupe de personnes. Cela peut être fait par négligence, pour tromper ou pour manipuler l'opinion publique. Il est important de faire la distinction entre l'infox et l'information véridique pour maintenir une société bien informée.</p>
                    </div>
                    <div className='element' id="element2">
                        <img className='image' id="news" src={news_illustration} alt="illustration" />
                    </div>
                    <div className='element' id="element3">
                        <img className='image' id="democatie" src={democratie_illustration} alt="illustration" /></div>
                    <div className='element' id="element4">
                        <h2>Démocratie</h2>
                        <p>La démocratie est un système politique dans lequel le pouvoir est exercé par le peuple, soit directement, soit par l'intermédiaire de représentants élus. Le terme "démocratie" vient du grec ancien "démokratia", composé des mots "dêmos" signifiant "peuple" et "kratos" signifiant "pouvoir".</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;