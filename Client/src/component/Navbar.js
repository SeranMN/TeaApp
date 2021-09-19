import React from 'react'
import '../App.css'


const Navbar = () => {
    return (
        <div className="Navbar">

            <div className="leftSide">
                <div className="links">
                    <a href="/home1">Vehicles</a>
                    &nbsp
                    <a href="/home2">Delivery</a>
                    
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="search.." />
                <button>Search</button>

            </div>

        </div>

    )
}

export default Navbar
