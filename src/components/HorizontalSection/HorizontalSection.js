import './HorizontalSection.css'

const HorizontalSection = (props) => {
    return (
        <div id={props.id} className={`container ${props.className}`} >
            <div >
                <h2 className="sectionTitle"> {props.title}</h2>
                <hr className="divider" />
            </div>

            {props.children}
        </div>
    )
}
export default HorizontalSection