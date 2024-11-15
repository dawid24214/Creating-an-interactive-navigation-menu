import React, {useState} from "react";
export const AdminPage = () =>{
    const [aboutText, setAboutText] =useState('Jesteśmy grupą pasjonatów kultury...');
    const [eventText, setEventText] = useState('Nadchodzące wydarzenie to...');

    const handleAboutChange = (e) =>{
        setAboutText(e.target.value);
    };

    const handleEventChange = (e) =>{
        setEventText(e.target.value);
    };

    const handleSave = () =>{
        console.log('Zapisano zmiany');
        //Mozna zaimplementowac zapisy do bazy danych ,np Firebase
    };

    return(
        <>
            <div className='admin-page'>
                <h1>Panel Administracyjny</h1>
                <div className='edit-section'>
                    <h2>Edytuj "O nas"</h2>
                    <textarea
                        value={aboutText}
                        onChange={handleAboutChange}
                        />
                </div>
                <div className='edit-section'>
                    <h2>Edytuj "Wydarzenia"</h2>
                    <textarea
                        value={eventText}
                        onChange={handleEventChange}
                        />
                </div>
                <button onClick={handleSave}>Zapisz zmiany </button>
            </div>
        </>
    )


}