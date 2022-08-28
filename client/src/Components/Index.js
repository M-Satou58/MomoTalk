import React from "react"
import bg from "../img/bg/index-bg.png"
import iconHearPink from "../img/icons/icon-pink-heart.svg"
import { useNavigate } from "react-router-dom"
const Index = () => {
    const navigate = useNavigate()
    return(
        <div className="flex flex-col w-full h-screen items-center 
        justify-center p-10 bg-gradient-to-br from-white via-white to-pink">
            <div className="flex items-center gap-x-4">
                <div className="uppercase text-6xl font-bold 
                text-dark-blue tracking-wider leading-tight">
                    <h1>welcome</h1>
                    <h1>to <span className="text-pink">MomoTalk</span></h1>
                </div>

                <div className="w-44">
                    <img clasName="w-full" src={iconHearPink} alt="" />
                </div>

            </div>

            <div className="flex items-center gap-x-4">
            <div>
            <div className="max-w-md">
                <p className="text-dark-blue text-3xl tracking-wide leading-normal">Hang out anytime,
                anywhere <span className="text-pink font-bold">MomoTalk </span>
                makes it easy and fun to stay close to your favorite 
                people.
                </p>
            </div>

            <div className="max-w-md mt-8 flex flex-col gap-y-1">  
                <button className="bg-pink text-white font-bold 
                rounded-sm w-full p-4 text-xl" onClick={() => {navigate("/login")}}>Login</button>
                <button className="bg-dark-blue text-white font-bold 
                rounded-sm w-full p-4 text-xl" onClick={() => {navigate("/signup")}}>Signup</button>
            </div>
            </div>

            
            <img className="max-w-lg" src={bg} alt="" />
            </div>
        </div>
    )
}

export default Index
