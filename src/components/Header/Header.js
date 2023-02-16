import './Header.css'
import Link from '../Link/Link'
const Header = () => {
    return ( 

        <header className='d-flex' id="link-iniziopagina" >
                <Link link="link-iniziopagina" title="EleDI" />
            <nav className='d-flex'> 
                <Link link="link-chisono" title="Chi sono" />
                <Link title="Skills" />
                <Link title="Portfolio" />
                <Link title="Contatti" />
            </nav>
        </header>
    )
}
export default Header;