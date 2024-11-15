import React, {useState} from "react";
export const ContactPage = () => {
    const [formData, setFormData] = useState({name:" ", email:"" , message: ""});

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Wyslij' , formData);
    };


    return(
        <>
        <div className='contact-page'>
            <h1>Skontaktuj sie z nami</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Imie'

                />
                <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                />
                <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Wiadomość'
                />
                <button type='submit'>Wyślij wiadomość</button>
            </form>
        </div>

        </>
    )
}