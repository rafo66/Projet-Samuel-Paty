import React from 'react';
import iconLight from '../../assets/img/arrow-up-light.svg'
import iconDark from '../../assets/img/arrow-up-dark.svg'

const ArrowUp = () => {
    return (
        <div>
            <button className='btn' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                <img src={iconLight} alt="icon" />
            </button>
        </div>
    );
};

export default ArrowUp;