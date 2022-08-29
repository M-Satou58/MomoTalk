import React from "react"
import bg from "../img/bg/bg-signup.png"
import iconHeartPink from "../img/icons/icon-pink-heart.svg"
const Signup = ({ setEmail, setPassword, setReTypePassword,emailAlreadyInUse, passwordDoesNotMatch, handleAction }) => {
    let formError = "outline outline-offset-2 outline-red"
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
                        <p className="text-dark-blue font-semibold text-3xl tracking-wide leading-normal">Hang out anytime,
                        anywhere <span className="text-pink font-bold">MomoTalk </span>
                        makes it easy and fun to stay close to your favorite 
                        people.
                        </p>
                     </div>

                        <div className="flex flex-col mt-8 gap-y-3 max-w-md">
                        <input className={`p-4 text-dark-blue text-2xl font-medium bg-gray
                            drop-shadow-lg rounded-sm ${emailAlreadyInUse ? formError : ''}
                        focus:outline focus:outline-offset-2 focus:outline-dark-blue
                        `} type="text" placeholder="email" 
                        onChange={(e) => setEmail(e.target.value)}/> 

                        <input className={`p-4 text-dark-blue text-2xl font-medium bg-gray
                            drop-shadow-lg rounded-sm ${passwordDoesNotMatch ? formError : ''}
                        focus:outline focus:outline-offset-2 focus:outline-dark-blue
                        `} type="password" placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                        
                        <input className={`p-4 text-dark-blue text-2xl font-medium bg-gray
                            drop-shadow-lg rounded-sm ${passwordDoesNotMatch ? formError : ''}
                        focus:outline focus:outline-offset-2 focus:outline-dark-blue
                        `} type="password" placeholder="re-type password"
                        onChange={(e) => setReTypePassword(e.target.value)}/>

                        {emailAlreadyInUse && <h1 className="text-red">Email already in use</h1>}    
                        {passwordDoesNotMatch && <h1 className="text-red">Password does not match</h1>}    

                        <button className="p-4 text-2xl font-bold bg-dark-blue 
                        text-white rounded-sm shadow-md"                    
                        onClick={handleAction}>Signup</button>                

                        
                        <span className="text-xs text-dark-blue">Already have an account? click here to login</span>
                    </div>
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
