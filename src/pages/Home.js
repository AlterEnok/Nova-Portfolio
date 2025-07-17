import { useState } from 'react';
import Header from './../components/header/Header';
import Powering from './../components/Powering/powering';
import Processing from './../components/Processing/processing';
// import Partners from './../components/Partners/partners';
import Faq from './../components/Faq/faq';
import Why from './../components/Why/why.js';
import Form from './../components/Form/form.js';
import CustomCursor from './../components/Cursor/cursor.js';
import ScrollTop from './../components/ScrollTop/scroll.js';
import AnimatedPage from '../components/SmoothPage/smooth.js';
import 'intl-tel-input/build/css/intlTelInput.css';



const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (

        <>
            <AnimatedPage >
                <div data-lenis-scroll>
                    <CustomCursor />
                    <Header />
                    <main className="section">
                        <div className="section-divider">
                            <svg
                                className="wave-lines"
                                viewBox="0 0 1440 320"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                                        <stop offset="0%" stopColor="#ff00c3" />
                                        <stop offset="100%" stopColor="#6a00ff" />
                                    </linearGradient>
                                </defs>

                                <path
                                    d="M0,160 C360,80 720,240 1080,160 C1260,120 1440,200 1440,200"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-1"
                                />
                                <path
                                    d="M0,180 C360,100 720,260 1080,180 C1260,140 1440,220 1440,220"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-2"
                                />
                                <path
                                    d="M0,200 C360,120 720,280 1080,200 C1260,160 1440,240 1440,240"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-3"
                                />
                                <path
                                    d="M0,220 C360,140 720,300 1080,220 C1260,180 1440,260 1440,260"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-4"
                                />
                            </svg>
                        </div>
                        <div className="container">
                            <div className="parallax" data-speed="2"> {/* Элемент с параллаксом */}
                                <Powering />
                            </div>

                            <div className="parallax" data-speed="1.5">
                                <Processing />
                            </div>

                            {/* <div className="parallax" data-speed="3">
                                <Partners />
                            </div> */}


                            <div className="parallax" data-speed="1">
                                <Faq />
                            </div>

                            <div className="parallax" data-speed="2.5">
                                <Why />
                            </div>




                        </div>
                        <div className="section-divider">
                            <svg
                                className="wave-lines"
                                viewBox="0 0 1440 320"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                                        <stop offset="0%" stopColor="#ff00c3" />
                                        <stop offset="100%" stopColor="#6a00ff" />
                                    </linearGradient>
                                </defs>

                                <path
                                    d="M0,160 C360,80 720,240 1080,160 C1260,120 1440,200 1440,200"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-1"
                                />
                                <path
                                    d="M0,180 C360,100 720,260 1080,180 C1260,140 1440,220 1440,220"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-2"
                                />
                                <path
                                    d="M0,200 C360,120 720,280 1080,200 C1260,160 1440,240 1440,240"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-3"
                                />
                                <path
                                    d="M0,220 C360,140 720,300 1080,220 C1260,180 1440,260 1440,260"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="wave wave-4"
                                />
                            </svg>

                        </div>


                        <Form isOpen={isFormOpen} setIsOpen={setIsFormOpen} />

                    </main>
                    <ScrollTop hide={isFormOpen} />
                </div>
            </AnimatedPage>
        </>
    );
};

export default Home;