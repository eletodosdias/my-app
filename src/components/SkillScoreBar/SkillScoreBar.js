import './SkillScoreBar.css'
const SkillScoreBar = ({title, value, color}) => {
    return(
        <div className='skillscore-container' >
            <h5>{title}</h5>

            <div className='display-flex'>
                <div className='skillscore-bar'>
                    <div 
                        className='skillscore' 
                        style={{
                            width: `${value}`, 
                            backgroundColor: `${color}` 
                        }}
                    ></div>
                </div>
                <div>
                    <h6> {value} </h6>
                </div>
            </div>
        </div>
    )
}
export default SkillScoreBar