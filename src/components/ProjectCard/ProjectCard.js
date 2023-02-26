import './ProjectCard.css'
const ProjectCard = ({img, title, subtitle, alt,url}) => {
    const openInNewTab = (url) => {
        
        window.open(url, '_blank').focus();
      };
    return(
        <div className='project-container'>
            <h6> {title} </h6>
            <p> {subtitle} </p>
            
            <img className='image' src={img} alt={`Immagine d'esempio di ${alt}`} onClick={() => openInNewTab(url)}/> 
            
        </div>
    )
}
export default ProjectCard