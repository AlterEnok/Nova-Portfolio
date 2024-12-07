
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';


const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Nova</strong> Team
                    </NavLink>

                    <BtnDarkMode />


                    <ul className="nav-list">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink} >
                            Home</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}
                        >Projects</NavLink>
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}
                        >Contacts</NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;