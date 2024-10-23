import React from "react"
import { FaSearch } from "react-icons/fa"

const SearchField = () => {
  return (
    <div className="mb-8 w-full min-w-56 flex items-center gap-4 shadow-xl rounded-md md:max-w-[500px] md:mb-0">
      <FaSearch className="opacity-50 m-4 mr-2 min-w-4" />
      <input type="text" placeholder="Search here..." className="p-1 w-full" />
    </div>
  )
}

export default SearchField
