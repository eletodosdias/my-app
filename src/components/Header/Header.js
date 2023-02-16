import './Header.css'
import Link from '../Link/Link'
const Header = () => {
    return ( 

        <header className='d-flex' id="link-iniziopagina" >
                <Link link="link-iniziopagina" title="EleDI" />
            <div className='d-flex'> 
                <Link link="link-chisono" title="Chi sono" />
                <Link title="Skills" />
                <Link title="Portfolio" />
                <Link title="Contatti" />
            </div>
        </header>
    )
}
export default Header;