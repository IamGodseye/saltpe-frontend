import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext';
import { SyncOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { API } from '../api';
import axios from 'axios';
import { toast } from 'react-toastify';

function AboutMeForm() {
    const [aboutMe, setAboutMe] = useState("");
    const [loading, setLoading] = useState("");
    const { user, setUser } = useContext(UserContext)
    let navigate = useNavigate()
    useEffect(() => {
        fetchUser();
        if (user === null) navigate('/')
    }, []);
    const getCSRFToken = async () => {
        const response = await axios.get(`${API}/csrf-token`);
        axios.defaults.headers['X-CSRF-Token'] = response.data.csrfToken;
    };
    const fetchUser = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const { data } = await axios.get(`${API}/profile`, {
                headers: {
                    'Authorization': token
                }
            });
            console.log(data);
            if (data.ok) setUser(data.user);
            getCSRFToken();
        } catch (error) {
            console.log(error);
            setUser(null)
            navigate("/login");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const token = JSON.parse(localStorage.getItem('token'))
            const { data } = await axios.post(`${API}/about-me`, {
                aboutMe
            }, {
                headers: {
                    'Authorization': token
                }
            });
            console.log(" responce", data);
            if (!data.ok) {
                console.log(data.message)
                throw Error(data.message)
            }
            toast.success("About me updated");

            setLoading(false);
            getCSRFToken();
            fetchUser();
        }
        catch (error) {
            console.log(error)
            var s = error.message || 'Something went wrong...Try again...';
            toast.error(` ${s}`);
            setLoading(false);
        }
    }
    return (
        <div className='m-3' style={{ minHeight: '80vh' }}>
            <div className='col-md-6 offset-md-3 p-2 alert alert-success' style={{ border: '1px solid green', fontWeight: '700' }}>

                <div>
                    Welcome
                    < br ></br>
                    {user.name}
                    <br></br>
                    Email: {user.email}
                    <br></br>
                    About Me: {user.aboutMe}
                </div>
            </div>
            <h1 className="text-center square mb-3 mt-3">About Me</h1>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="textarea"
                    className="form-control mb-4 p-4"
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                    placeholder={user.aboutMe ? user.aboutMe : 'Enter about me'}
                    required
                />

                <button
                    type="submit"
                    className="btn btn-block btn-primary form-control width100 p-2 getting-started"
                    disabled={!aboutMe}
                    style={{
                        backgroundColor: "#0066FF",
                        borderColor: "#2E47FF",
                        color: "white",
                    }}
                >
                    {loading ? <SyncOutlined spin /> : "Submit"}
                </button>
            </form>

        </div>
    )
}

export default AboutMeForm