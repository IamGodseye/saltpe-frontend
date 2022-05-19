import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SignupForm from '../components/signupForm'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'

function Signup() {
    const { user, setUser } = useContext(UserContext)
    let navigate = useNavigate()
    useEffect(() => {
        if (user !== null) navigate('/')
    }, [user])
    return (
        <div>
            <Navbar />
            <SignupForm />
            <Footer />
        </div>
    )
}

export default Signup