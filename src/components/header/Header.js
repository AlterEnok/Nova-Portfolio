import './style.css';
const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>We are<em><br></br>Nova Team</em></strong><br />
                    the creators of digital excellence. From concept to code, we design and develop websites that make a difference.
                </h1>
                <div className="header__text">
                    <p>may the force be with you.</p>
                </div>
                {/* <a href="/CV.pdf" className="btn" download>Download CV</a> */}
            </div>
        </header>
    );
}

export default Header;
