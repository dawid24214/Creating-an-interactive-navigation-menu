import React from "react";

export const Home = () => {
    return(
        <>
            <header className='header__container'>
                <section className='header__registraion container'>
                    <a href=''>Zaloguj się</a><br/>
                    <a href=''>Rejestracja</a>
                </section>
                <section className='header__navigation'>
                    <a href=''>Główne menu</a>
                    <a href=''>Postacie</a>
                    <a href=''>Ksiega potworów</a>
                    <a href=''>umiejętności</a>
                    <a href=''>Potwory</a>
                </section>

            </header>
        </>
    )
}