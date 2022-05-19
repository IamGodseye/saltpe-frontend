import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

function Hero() {
    const { user, setUser } = useContext(UserContext)

    return (
        <div className='p-4 m-4' style={{ minHeight: '80vh' }} >

            <div className='row m-2'>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-2' style={{ fontSize: '2rem', color: '#202030', fontWeight: '700', textAlign: 'center' }}>
                    <span style={{ fontWeight: '900' }}>🚀 Join the Revolution 🚀</span>
                    <br></br>
                    <span>💵 Build the Buisness without worrying about paperwork 📝</span>
                    <br></br>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center mb-2'>
                    <img src="transfer_money.svg" style={{ width: '90%' }} />
                </div>
            </div>
            <div className='col-md-6 offset-md-3 p-2 alert alert-success' style={{ border: '1px solid green', fontWeight: '700' }}>
                {user ? (
                    <div>
                        Welcome
                        < br ></br>
                        {user.name}
                        <br></br>
                    </div>
                ) : (<div>Please Login</div>)}
            </div>
        </div >
    )
}

export default Hero