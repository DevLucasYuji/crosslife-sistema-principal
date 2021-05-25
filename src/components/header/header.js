import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import Logo from '../logo/logo'
import './header.css'

const Header = () => {

    const { signOut } = useAuth()

    return (
        <div className="header-content">
            <Logo className="header"/>
            <Link to="/" className="logout" onClick={signOut}>Sair</Link>
            <hr/>
        </div>
    )
}

export default Header