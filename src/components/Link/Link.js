import './Link.css'

const Link = (props) => {
    return(
        <>
            <a href={props.linkHref} > {props.title} </a>
        </>
    )
}
export default Link