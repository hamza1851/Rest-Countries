import React from "react"
import SearchField from "./SearchField"
import FilterBar from "./FilterBar"
import Subregion from "./SubRegion"
import SortBy from "./SortBy"
import { useAppContext } from "../context/AppContext"

const SearchSection = () => {
  const { isDark } = useAppContext()
  return (
    <div
      className={`max-w-6xl mb-12 mx-auto p-2 px-0 md:flex flex-wrap sm:gap-4 justify-between ${
        isDark ? "bg-[#202C37]" : "bg-[#ffff]"
      }`}
    >
      <SearchField />
      <SortBy />
      <Subregion />
      <FilterBar />
    </div>
  )
}

export default SearchSection
