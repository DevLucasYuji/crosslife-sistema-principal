import { Link } from 'react-router-dom'
import './optionItem.css'

const OptionItem = (props) => {
    
    return (
        <Link to={props.path} style={{ textDecoration: 'none' }}>
            <li className="option-item">
                <img src={props.src}/>
                <span className="option-title">{props.name}</span>
            </li>
        </Link>
    )
}

export default OptionItem