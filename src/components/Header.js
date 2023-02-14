import './Header.css'
import Link from './Link'
const Header = () => {
    return ( 
        <header >
            <ul className='d-flex'>
                
                <Link />
    
                <div className='d-flex'> 
                    <Link />
                    <Link />
                    <Link />
                    <Link />
                </div>
            </ul>
        </header>
    )
}
export default Header;