import './Header.css'
import Link from '../Link/Link'
const Header = () => {
    return ( 
        <header className='d-flex' >
                <Link />
            <div className='d-flex'> 
                <Link />
                <Link />
                <Link />
                <Link />
            </div>
        </header>
    )
}
export default Header;