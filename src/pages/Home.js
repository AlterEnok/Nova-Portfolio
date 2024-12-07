import Header from './../components/header/Header';
const Home = () => {
    return (

        <>
            <Header />

            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript,  ReactJS,  Sass, Scss, HTML, CSS, NPM, BootStrap,  StyledComponents</p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>MySQL,  PHP,  Node, , HTML, CSS, NPM, JavaScript, Laravel</p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">UI/UX</h2>
                            <p>Figma,  Adobe XD,  UI elements, , Illustrator, Typography, Motion</p>
                        </li>

                    </ul>

                </div>
            </main>
        </>
    );
}

export default Home;