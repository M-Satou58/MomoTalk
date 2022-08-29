import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar.js"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12">
                <Sidebar className="grid-cols-2"/>
                <div className="grid-cols-5"></div>
                <div className="grid-cols-5"></div>
            </div>
        </div>
    )
}

export default Home
