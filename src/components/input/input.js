import './input.css'

const Input = (props) => {

    return (
        <div className={`input ${props.className}`} style={props.style}>
            <label className="input-label">{props.label}</label>
            <input className="input-field" type={props.type || 'text'} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input