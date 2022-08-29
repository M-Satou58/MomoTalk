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
import aronaTwelve from "./img/arona/Arona_P_12.png"
import aronaTwentyNine from "./img/arona/Arona_P_29.png"
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
                toast.error('From SCHALE HQ: Incorrect Password')
                return
            }
            if (error.code === 'auth/user-not-found'){
                toast.error('From SCHALE HQ: Email does not exist')
                return
            }
            else{
                return
            }

        })

        toast.info(
                <div className="flex gap-x-2 text-sm">
                <img className="h-16" src={aronaTwentyNine} alt="" />
                <span>From SCHALE HQ: <span className="text-blue
                font-medium">Pagod na ang ferson!</span></span></div>,
                {autoClose: 3000}
            )
        navigate("/home")
        

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
                    toast.error('From SCHALE HQ: Email already in use!')
                    return
                }
            })

            toast.info(
                <div className="flex gap-x-2 text-sm">
                <img className="h-16" src={aronaTwelve} alt="" />
                <span>From SCHALE HQ: <span className="text-blue
                font-medium">Account created successfully!</span></span></div>,
                {autoClose: 3000}
            )
                navigate("/login")

        } 
        else {
            toast.error('From SCHALE HQ: Passwords does not match')
        }
       
    }

  }


  //useEffect(() => {
    //let authToken = sessionStorage.getItem('Auth Token')
    //if (authToken){navigate("/home")}
  //})


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
