import './button.css'

const Button = (props) => {
    return (
        <button style={props.style} className={`${props.type || "primary"} ${props.className}`} onClick={props.onClick}>{props.name}</button>
    )
}

export default Button