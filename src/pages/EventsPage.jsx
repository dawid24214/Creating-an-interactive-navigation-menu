import React  from "react";
import {Comments} from "../component jsx/Comments.jsx";
export const EventsPage = () => {
    return(
        <div>
            <div className='events-page'>
                <h1>Wydarzenia</h1>
                <p> Sprawdź nasze nadchodzące wydarzenia i bądź na bieżąco z nowościami!</p>
                <div className='event'>
                    <h2>Wydarzenia 1</h2>
                    <p>Opis wydarzenia...</p>
                    <Comments eventId={1}/>
                </div>



                <div className='events'>
                    <h1>Wydarzenia</h1>
                    <p> Sprawdź nasze nadchodzące wydarzenia i bądź na bieżąco z nowościami!</p>
                    <div className='event'>
                        <h2>Wydarzenia 2</h2>
                        <p>Opis wydarzenia...</p>
                        <Comments eventId={2}/>
                    </div>
                    </div>
            </div>
        </div>
    )
}