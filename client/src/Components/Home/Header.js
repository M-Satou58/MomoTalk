import React from "react"

import iconHeart from "../../img/icons/icon-white-heart.svg"
const Header = () => {
   
    return (
        <div className="flex w-full h-16 px-4 bg-pink">
            <div className="flex items-center gap-x-2">
                <img className="w-12" src={iconHeart} alt="" />
                <h1 className=" text-3xl text-white font-bold">MomoTalk</h1>
            </div>
        </div>
    )
}

export default Header
