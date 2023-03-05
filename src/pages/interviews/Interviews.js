import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import Footer from '../../components/footer/Footer';
import ResponsivePlayer from '../../components/video/ResponsivePlayer';

const Interview = () => {
    return (
        <div id='interviews-page'>
            <Navigation />
            <div className="content">

                <ResponsivePlayer url='https://www.youtube.com/watch?v=1MieluM0c6c' />
            </div>
            <Footer />
        </div>
    );
};

export default Interview;