import Logo from '../../components/logo/logo'
import Input from '../../components/input/input'
import Button from '../../components/button/button'

import './login.css'

const Login = () => {

    return (
        <div className="login">
            <Logo className="logo" size="30px"/>
            <Input type="text" label="username"/>
            <Input type="password" label="password" style={{marginTop: '20px'}}/>
            <Button type="primary" name="entrar" style={{marginTop: '40px'}}/>
        </div>
    )
}

export default Login