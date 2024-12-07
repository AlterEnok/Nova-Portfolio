const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="tel:+380668790568">https://t.me/The_Nova_Team</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Instagram</h2>
                        <p><a href="https://www.instagram.com/novateamweb/?hl=de">https://www.instagram.com/novateamweb/?hl=de</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:novateam.web@gmail.com">novateam.web@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;