import { useContext, useState, createContext } from "react"
import api from "../services/api"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`
            return token
        }

        return {}
    })
    const signIn = async (username, password) => {
        const response = await api.post("/login", {"user_name": username, password})
        localStorage.setItem("token", response.data.Token)
        api.defaults.headers.authorization = `Bearer ${response.data.Token}`
        setData(response.data.Token)
    }

    const signOut = async () => {
        await api.post('/logout') 
        localStorage.removeItem("token")
        setData({})
    }

    return (
        <AuthContext.Provider value={{signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an auth provider")
    }

    return context
}


export {
    AuthProvider,
    useAuth
}