import './HorizontalSection.css'

const HorizontalSection = ({id, className, title, children}) => {
    return (
        <div id={id} className={`container ${className}`} >
            <div >
                <h2 className="sectionTitle"> {title}</h2>
                <hr className="divider" />
            </div>

            {children}

        </div>
    )
}
export default HorizontalSection