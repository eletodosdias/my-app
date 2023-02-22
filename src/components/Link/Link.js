import './Link.css'

const Link = ({linkHref, title}) => {
    return(
        <>
            <a className="menuLink" href={linkHref} > {title} </a>
        </>
    )
}
export default Link