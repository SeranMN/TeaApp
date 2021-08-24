import React from 'react'

const SearchBar = () => {
  return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Enter AppointmentID</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Appointment ID"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
