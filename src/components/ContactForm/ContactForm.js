import { useForm } from '@formspree/react';
//import { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mqldaqwx');
    if (state.succeeded) {
        return <h3>Grazie</h3>;
    }

    // STATE:
    // const [formData, setFormData] = useState({ 
    //     userName:'', 
    //     // userSurname: ''  
    //     email:'',
    //     phone:'',
    //     message: ''
    // });
    // const inputChangeHandler = e => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name] : value
    //     })
    // }

    // console.log('formData dopo = ', formData)

    // const formSubmitHandler = e => {
    //     e.preventDefault();
        
    //     setFormData({ 
    //         ...formData,
    //         userName:'', 
    //         // userSurname: ''  
    //         email:'',
    //         phone:'',
    //         message: ''
    //     })
    // }

    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="userName">Name</label>
            <input 
                // value={formData.userName}
                className="form-control" 
                id="userName" 
                name="userName"
                type="text" 
                placeholder="Nome"
                // onChange={inputChangeHandler}
                required
            />
            {/* <input 
                value={formData.surname}
                className="form-control" 
                id="userSurname" 
                name="userSurname"
                type="text" 
                placeholder="Cognome"
                onChange={inputChangeHandler}
            /> */}
            <label htmlFor="email">Email Address</label>
            <input 
                // value={formData.email}
                className="form-control" 
                id="email" 
                name="email"
                type="email" 
                placeholder="Indirizzo email"
                // onChange={inputChangeHandler}
                required
            />
            <label htmlFor="phone">Phone number</label>
            <input 
                // value={formData.phone}
                className="form-control" 
                id="phone"
                name="phone"
                type="number" 
                placeholder="Numero cellulare" 
                // onChange={inputChangeHandler}
                required
            />
            <label htmlFor="message">Message</label>
            <textarea
                // value={formData.message}
                name="message"
                className="form-control" 
                placeholder="Messaggio" 
                // onChange={inputChangeHandler}
                required
            ></textarea>

            {/* <input 
                className='submit' 
                type="submit" 
                value="Invia" 
                disabled={state.submitting}
            /> */}
             <button 
                className='submit'
                type="submit" 
                disabled={state.submitting} > Submit </button>
        </form>
    )
}
export default ContactForm