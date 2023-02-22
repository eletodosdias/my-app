import './SectionButton.css'
const SectionButton = ({linkHref, title}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href=linkHref;
        }
    return(
        <>
            {/* <a href={linkHref} className="sectionButton"> {title} </a> */}

            <button className="sectionButton" onClick={handleClick}
            >{ title }</button>

        </>
    )
}
export default SectionButton