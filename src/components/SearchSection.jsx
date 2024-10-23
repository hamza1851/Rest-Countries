import React from "react"
import SearchField from "./SearchField"
import FilterBar from "./FilterBar"

const SearchSection = () => {
  return (
    <div className="p-2 px-14 md:flex justify-between ">
      <SearchField />
      <FilterBar />
    </div>
  )
}

export default SearchSection
