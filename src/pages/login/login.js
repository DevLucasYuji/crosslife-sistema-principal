import Logo from '../../components/logo/logo'
import Input from '../../components/input/input'
import Button from '../../components/button/button'

import './login.css'
import { useEffect } from 'react'
import api from '../../services/api'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const history = useHistory()

    const { signIn } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signIn(username, password)
            history.push("/dashboard")
        } catch (exception) {
            console.error(exception)
        }
        
    }

    return (
        <div className="login">
            <Logo className="logo" size="30px"/>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="username" onChange={({target}) => setUsername(target.value)}/>
                <Input type="password" label="password" style={{marginTop: '20px'}} onChange={({target}) => setPassword(target.value)}/>
                <Button type="primary" name="entrar" style={{marginTop: '40px'}}/>
            </form>
        </div>
    )
}

export default Login