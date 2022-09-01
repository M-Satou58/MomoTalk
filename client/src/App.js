import React, { useState, useEffect } from "react"
import Index from "./Components/Index"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Home from "./Components/Home/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import { app } from "./firebase-config.js"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";                   

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from "./img/bg/hexa_back_01.png"
import Alert from "./Components/Alert"

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleAction = (id) => {
    const authentication = getAuth()
    if (id === 1){
        signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            navigate("/home")
            sessionStorage.setItem('Auth Token', 
            response._tokenResponse.refreshToken)
        })
        .catch((error) => {
            if (error.code === 'auth/wrong-password'){
                toast.error(<Alert type="error" text="Incorrect password!" />, {autoClose: 3000})
                return
            }
            if (error.code === 'auth/user-not-found'){
                toast.error(<Alert type="error" text="Email does not exist!" />, {autoClose: 3000})
                return
            }
            else{
                return
            }

        })
        
        toast.info(<Alert type="info" text="Welcome to MomoTalk!" />, {autoClose: 3000})
        navigate("/home")
        

    }
    if (id === 2){
            createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage('Auth Token', 
                response._tokenResponse.refreshToken)
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use'){
                    toast.error(<Alert type="error" text="Email already in use!" />, {autoClose: 3000})
                    return
                }
            })

                toast.success(<Alert type="success" text="Account created successfully!" />, {autoClose: 3000})
                navigate("/login")

        } 
        else {
            toast.error(<Alert type="error" text="Password does not match!" />, {autoClose: 3000})
        }
  }


  //useEffect(() => {
    //let authToken = sessionStorage.getItem('Auth Token')
    //if (authToken){navigate("/home")}
  //})
  const bgCover = {
    backgroundImage: `url(${bg})`,
    height: "100%",
    width: "100%",
//    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div style={bgCover}>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route 
                path="/login" 
                element={
                <Login 
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleAction={() => handleAction(1)}
                />} />
            <Route 
                path="/signup" 
                element={
                    <Signup
                        bgCover={bgCover}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        handleAction={() => handleAction(2)}
                    />}
                />

            <Route path="/home" element={<Home />}/>
        </Routes>
        <ToastContainer />
    </div>
 );
}

export default App;
