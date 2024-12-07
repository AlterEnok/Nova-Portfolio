import './style.css';

import tg from './../../img/icons/tg.svg';
import instagram from './../../img/icons/instagram.svg';
import github from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item social__item-tg"><a href="https://t.me/The_Nova_Team"><img src={tg} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/novateamweb/"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/AlterEnok"><img src={github} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/nova-team-586677339/"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 Nova Team</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;