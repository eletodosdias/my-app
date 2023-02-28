import './ContactForm.css'
const ContactForm = () => {
    return(
        <form>
            <input className="form-control" type="text" placeholder="Inserisci il tuo nome"/>
            <input className="form-control" type="email" placeholder="Inserisci il tuo inidirizo email"/>
            <input className="form-control" type="number" placeholder="Inserisci il tuo numero" />
            <textarea className="form-control" placeholder="Inserisci messaggio" ></textarea>
            <input className='submit' type="button" value="Invia" />
        </form>
    )
}
export default ContactForm