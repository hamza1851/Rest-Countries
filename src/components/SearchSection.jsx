import React from "react"
import SearchField from "./SearchField"
import FilterBar from "./FilterBar"
import Subregion from "./SubRegion"
import SortBy from "./SortBy"

const SearchSection = () => {
  return (
    <div className="max-w-[80%] mx-auto p-2 px-0 md:flex justify-between ">
      <SearchField />
      <SortBy />
      <Subregion />
      <FilterBar />
    </div>
  )
}

export default SearchSection
