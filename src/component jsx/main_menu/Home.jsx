import React from "react";
import {Link} from "react-router-dom";
import "../../component scss/main.scss"

export const Home = () => {
    return(
        <>
            <header className='header__container'>
                <section className='container'>
                    <Link to='/Login' className='login__container' >
                        <button>ZALOGUJ SIĘ </button>
                    </Link>
                    <Link to='/Registration' className='register__container'>
                        <button>REJESTRACJA</button>
                    </Link>
                </section>
                <section className='header__navigation'>
                    <Link to='/Main_menu' className='/'>
                      <button>Główne menu</button>
                    </Link>
                    <Link to='Characters' className='/'>
                        <button>Postacie</button>
                    </Link>
                    <Link to='/Monster_book' className='/'>
                        <button>Ksiega potworów</button>
                    </Link>
                    <Link to='Skill' className='/'>
                        <button>Umiejętności</button>
                    </Link>
                </section>

            </header>
        </>
    )
}