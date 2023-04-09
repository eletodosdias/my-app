import './Header.css'
import Link from '../Link/Link'
const Header = () => {
    return ( 
        <header className='d-flex' >
                <Link linkHref="/" title="EleDI" />
            <div className='d-flex'> 
                <Link linkHref="#link-chisono" title="Chi sono" />
                <Link linkHref="#link-softskills"  title="Soft Skills" />
                <Link linkHref="#link-hardskills"  title="Hard Skills" />
                <Link linkHref="#link-portfolio" title="Portfolio" />
                <Link linkHref="#link-contatti"title="Contatti" />
            </div>
        </header>
    )
}
export default Header;