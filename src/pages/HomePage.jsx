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
            <Link to='/footer' className='footer'>Social media</Link>

        </div>
    );
}