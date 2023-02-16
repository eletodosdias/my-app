import './HorizontalSection.css'

const HorizontalSection = (props) => {
    return (
        <div id={props.sectionId} className="title" >
            <div >
                <h2> {props.sectionTitle}</h2>
                <hr />
            </div>
           
            <div>
                
            </div>
        </div>
    )
}
export default HorizontalSection