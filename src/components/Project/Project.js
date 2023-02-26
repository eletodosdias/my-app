import './Project.css'
const Project = ({img, title, subtitle, alt}) => {
    return(
        <div className='project-container'>
            <img className='image' src={img} alt={alt}/> 
          
          
        </div>
    )
}
export default Project