import './SectionButton.css'
const SectionButton = ({linkHref, title}) => {
    return(
        <>
            {/* <a href={linkHref} className="sectionButton"> {title} </a> */}

            <button className="sectionButton" onClick={ (e) => {
                e.preventDefault();
                window.location.href=linkHref;
                }}
            >{ title }</button>

        </>
    )
}
export default SectionButton