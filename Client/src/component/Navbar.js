import React from 'react'
import '../App.css'


const Navbar = () => {
    return (
        <div className="vNavbar">

            <div className="vleftSide">
                <div className="vlinks">
                    <a href="/home1">Vehicles</a>
                    &nbsp
                    <a href="/home2">Delivery</a>
                    
                </div>
            </div>
            <div className="vrightSide">
                <input type="text" placeholder="search.." />
                <button>Search</button>

            </div>

        </div>

    )
}

export default Navbar
