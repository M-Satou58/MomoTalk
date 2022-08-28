import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        authToken ? navigate('/home') : navigate('/login')
    })
    return (
        <div>MomoTalk</div>
    )
}

export default Home
