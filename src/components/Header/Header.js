import './Header.css'
import Link from '../Link/Link'
const Header = () => {
    return ( 

        <header className='d-flex' id="link-iniziopagina" >
                <Link linkHref="#link-iniziopagina" title="EleDI" />
                
            <div className='d-flex'> 
                <Link linkHref="#link-chisono" title="Chi sono" />
                <Link linkHref="#link-skills"  title="Skills" />
                <Link linkHref="#link-portfolio" title="Portfolio" />
                <Link linkHref="#link-contatti"title="Contatti" />
            </div>
        </header>
    )
}
export default Header;