import './Card.css'
const Card = ({title, icon, alt, content}) => {
    return(
        <div className='card' >
            <img src={icon} alt={`Icona a forma di ${alt}`} />
            <h3>{title}</h3>
            <p className='cardContent'>{content}</p>
        </div>
        
    )
}
export default Card