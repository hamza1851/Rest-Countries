import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useAppContext } from "../context/AppContext"

const SearchField = () => {
  const { setSearchTerm, isDark } = useAppContext()
  const [localSearch, setLocalSearch] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setLocalSearch(value)
    setSearchTerm(value)
  }

  return (
    <div
      className={`mb-8 w-[90%] max-h-14 mx-auto min-w-56 flex items-center gap-4 shadow-lg rounded-md md:max-w-[480px] md:mb-0 md:mx-0 ${
        isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
      }`}
    >
      <FaSearch className="opacity-50 m-4 mr-2 min-w-4" />
      <input
        type="text"
        placeholder="Search here..."
        className={`p-1 w-full focus:outline-none ${
          isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
        }`}
        value={localSearch}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchField
