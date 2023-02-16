import './Link.css'

const Link = (props) => {
    return(
        <>
            <a href={props.link}> {props.title} </a>
        </>
    )
}
export default Link