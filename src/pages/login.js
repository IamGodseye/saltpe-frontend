import Footer from '../components/footer'
import Navbar from '../components/navbar'
import LoginForm from '../components/loginForm'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { useEffect, useContext } from 'react'

function Login() {
    const { user, setUser } = useContext(UserContext)
    let navigate = useNavigate()
    useEffect(() => {

        if (user !== null) navigate('/')
    }, [user])
    return (
        <div>
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login