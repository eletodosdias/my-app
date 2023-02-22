import './SectionButton.css'
const SectionButton = ({linkHref, title}) => {
    return(
        <>
        <a href={linkHref} className="sectionButton"> {title} </a>
        </>
    )
}
export default SectionButton