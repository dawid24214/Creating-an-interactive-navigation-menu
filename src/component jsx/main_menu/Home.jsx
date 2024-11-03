import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return(
        <>
            <header className='header__container'>
                <section className='header__registraion container'>
                    <Link to='/Login' className=''>
                        Zaloguj się
                    </Link>
                    <Link to='/Registration' className=''>
                       Rejestracja
                    </Link>
                </section>
                <section className='header__navigation'>
                    <Link to='/Main_menu' className='/'>
                       Główne menu
                    </Link>
                    <Link to='Characters' className='/'>
                        Postacie
                    </Link>
                    <Link to='/Monster_book' className='/'>
                        Ksiega potworów
                    </Link>
                    <Link to='Skill' className='/'>
                        Umiejętności
                    </Link>
                </section>

            </header>
        </>
    )
}