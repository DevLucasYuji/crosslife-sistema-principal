import './optionItem.css'

const OptionItem = (props) => {
    
    return (
        <li className="option-item">
            <img src={props.src}/>
            <span className="option-title">{props.name}</span>
        </li>
    )
}

export default OptionItem