import React from 'react';
import {Link} from "react-router-dom";


export const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Witaj na stronie Kultury i Rozrywki</h1>
            <p>
                Zapraszamy do zapoznania się z naszą ofertą, wydarzeniami i galerią.
            </p>
            <Link to='/about' className='cta-button'>Dowiedz się więcej o nas</Link><br/>


            <footer className="footer">
                <p>&copy; 2024 Kultura i Rozrywka</p>
                <div className="social-media">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        Facebook<br/>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        Instagram<br/>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        Twitter<br/>
                    </a>
                </div>
            </footer>

        </div>
    );
}

