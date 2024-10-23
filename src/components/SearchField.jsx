import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useAppContext } from "../context/AppContext"

const SearchField = () => {
  const { setSearchTerm } = useAppContext() 
  const [localSearch, setLocalSearch] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setLocalSearch(value)
    setSearchTerm(value) 
  }

  return (
    <div className="mb-8 w-full min-w-56 flex items-center gap-4 shadow-xl rounded-md md:max-w-[500px] md:mb-0">
      <FaSearch className="opacity-50 m-4 mr-2 min-w-4" />
      <input
        type="text"
        placeholder="Search here..."
        className="p-1 w-full focus:outline-none"
        value={localSearch}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchField
