import React, { useState, useEffect } from "react"
import Index from "./Components/Index"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import { Routes, Route, useNavigate } from "react-router-dom"
import { app } from "./firebase-config.js"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";                   

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [reTypePassword, setReTypePassword] = useState('')

  const [emailAlreadyInUse, setEmailAlreadyInUse] = useState(false)
  const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false)
  
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
                toast.error('From Abydos HQ: Incorrect Password')
            }
            if (error.code === 'auth/user-not-found'){
                toast.error('From Abydos HQ: Email does not exist')
            }
        })
        

    }

    if (id === 2){
        if (password === reTypePassword){
            createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage('Auth Token', 
                response._tokenResponse.refreshToken)
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use'){
                    setEmailAlreadyInUse(true)
                    toast.error('From Abydos HQ: Email already in use!')
                }
            })
        } 
        else {
            toast.error('From Abydos HQ: Passwords does not match')
        }
       
    }

  }


  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken){navigate("/home")}
  })


  useEffect(() => {
    if (password !== reTypePassword){
        setPasswordDoesNotMatch(true)
    }
    else{
        setPasswordDoesNotMatch(false)
    }
  }, [password, reTypePassword])

 
  useEffect(() => {
    setEmailAlreadyInUse(false) 
 }, [email])      




  return (
    <div className="App">
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
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setReTypePassword={setReTypePassword}
                        emailAlreadyInUse={emailAlreadyInUse}
                        passwordDoesNotMatch={passwordDoesNotMatch}
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
