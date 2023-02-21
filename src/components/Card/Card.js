import './Card.css'
const Card = (props) => {
    return(
        <div className='card' key={props.cards.id} >
            <img src={props.cards.icon} alt={`Icona a forma di ${props.cards.alt}`} />
            <h3>{props.cards.title}</h3>
            <p className='cardContent'>{props.cards.content}</p>
        </div>
    )
}
export default Card