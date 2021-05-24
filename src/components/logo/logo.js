import './logo.css'

const Logo = (props) => {
    return (
        <div {...props} >
            <span className="logo-cross" style={{fontSize: props.size || '26px'}}>cross</span>
            <span className="logo-life" style={{fontSize: props.size || '26px'}}>life</span>
        </div>
    )
}

export default Logo