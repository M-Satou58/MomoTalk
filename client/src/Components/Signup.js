import React from "react"
import bg from "../img/bg/bg-signup.png"
import iconHeartPink from "../img/icons/icon-pink-heart.svg"
import SignupForm from "./Common/Form/SignupForm.js"
const Signup = ({ setEmail, setPassword, handleAction }) => {
    return (
        <div className="flex w-full gap-x-8 p-10 justify-center items-center  
        bg-gradient-to-br overflow-hidden">
            <div>
            <div className="flex items-center gap-x-4">
                <h1 className="text-6xl font-extrabold text-pink">MomoTalk</h1>
                <div className="w-28"><img className="w-full"src={iconHeartPink} alt="" /> </div>
            </div>
            <div className="flex gap-x-4">
                <div>
                     <div className="max-w-md mt-8">
                        <p className="text-dark-blue font-semibold text-3xl 
                        tracking-wide leading-normal">Hang out anytime,
                        anywhere <span className="text-pink font-bold">MomoTalk </span>
                        makes it easy and fun to stay close to your favorite 
                        people.</p>
                     </div>

                     <SignupForm setEmail={setEmail} setPassword={setPassword} handleAction={handleAction}/>
                </div>  
            </div>
        </div>
        <div className="max-w-xl">
            <img className="w-full" src={bg} alt="" />
        </div>
            </div>
    )
}

export default Signup
