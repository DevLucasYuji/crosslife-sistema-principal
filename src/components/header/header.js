import { Link } from 'react-router-dom'
import Logo from '../logo/logo'
import './header.css'

const Header = () => {

    return (
        <div className="header-content">
            <Logo className="header"/>
            <Link to="/" className="logout">Sair</Link>
            <hr/>
        </div>
    )
}

export default Header