import React from "react"

import aronaSuccess from "../img/arona/Arona_P_12.png"
import aronaInfo from "../img/arona/Arona_P_02.png"
import aronaWarning from "../img/arona/Arona_P_04.png"
import aronaError from "../img/arona/Arona_P_30.png"
 

const Alert = ({type, text}) => {
    let img
    let color

    switch (type){
        case "success":
            img = aronaSuccess 
            color = "blue"
            break;
        case "info":
            img = aronaInfo
            color = "blue"
            break;
        case "warning":
            img = aronaWarning
            color = "blue"
            break;           
        case "error":
            img = aronaError
            color = "red"
            break;
        default:
            break
        } 
    return(
        <div className="flex gap-x-2 text-md">
            <img className="h-16" src={img} alt="" />
            <span>From SCHALE HQ: <span className={`text-${color} 
            font-medium`}>{text}</span></span>
        </div> 
        )
}


export default Alert
