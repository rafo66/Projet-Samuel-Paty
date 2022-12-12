import Switch from './switch/Switch';
import ToggleDarkMode from './switch/ToggleDarkMode';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
var isLoaded = false;

const Navigation = () => {
    const DefaultDarkMode = () => {
        if (!isLoaded) {
            isLoaded = true
            ToggleDarkMode('light')
        }
    }
    DefaultDarkMode()
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="nav">
            <h1 className='logo'>Projet Samuel Paty</h1>
            <ul className='nav-links'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/projet" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Projet</li>
                </NavLink>
                <NavLink to="/decodeur" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Décodeur</li>
                </NavLink>
                <NavLink to='/credits' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Crédits</li>
                </NavLink>
            </ul>
            <Switch isToggled={isToggled} onToggle={() => {
                setIsToggled(!isToggled);
                var state = !isToggled;
                ToggleDarkMode({ state });
            }} />
        </div>
    );
};

export default Navigation;