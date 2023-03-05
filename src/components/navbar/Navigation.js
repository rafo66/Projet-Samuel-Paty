import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
            <ul className='nav-links'>
                <NavLink to="/Projet-Samuel-Paty/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Projet-Samuel-Paty/interviews" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Interviews</li>
                </NavLink>
                <NavLink to="/Projet-Samuel-Paty/mini-jeux" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Mini Jeux</li>
                </NavLink>
                <NavLink to="/Projet-Samuel-Paty/credits" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Crédits</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;