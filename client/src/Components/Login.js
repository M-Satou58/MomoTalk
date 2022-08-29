import React from "react"
import bg from "../img/bg/bg-login.png"
import iconHeartPink from "../img/icons/icon-pink-heart.svg"
const Login = ({ setEmail, setPassword, handleAction }) => {
    return (
        <div className="p-10 w-full h-screen relative 
         overflow-hidden">
            <div className="flex items-center gap-x-4">
                <h1 className="text-6xl font-extrabold text-pink">MomoTalk</h1>
                <div className="w-28"><img className="w-full"src={iconHeartPink} alt="" /> </div>
            </div>

            <div className="flex gap-x-4">
                <div>
                     <div className="max-w-md mt-8">
                        <p className="text-dark-blue font-bold text-3xl tracking-wide leading-normal">Hang out anytime,
                        anywhere <span className="text-pink font-semibold">MomoTalk </span>
                        makes it easy and fun to stay close to your favorite 
                        people.
                        </p>
                     </div>

                    <div className="flex flex-col mt-8 gap-y-3 max-w-md">
                        <input className="p-4 text-dark-blue text-2xl font-medium bg-gray
                        shadow-md rounded-sm focus:outline focus:outline-offset-2 
                        focus:outline-dark-blue" type="text" placeholder="username" 
                        onChange={(e) => setEmail(e.target.value)}/>

                        <input className="p-4 text-dark-blue text-2xl font-medium bg-gray
                        shadow-md rounded-sm focus:outline focus:outline-offset-2 
                        focus:outline-dark-blue" type="password" placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}/>

                        <button className="p-4 text-2xl font-bold bg-dark-blue 
                        text-white rounded-sm shadow-md"
                        onClick={handleAction}>Login</button>                 
                    </div>
                </div>  
            </div>

            <img className="absolute top-0 right-0" src={bg} alt="" />
        </div>
    )
}

export default Login
