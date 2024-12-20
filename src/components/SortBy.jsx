import React from "react"
import { GoSortAsc, GoSortDesc } from "react-icons/go"
import { useAppContext } from "../context/AppContext"

const SortBy = () => {
  const { setSortBy, setSortOrder, isDark } = useAppContext()

  const handleSortChange = (sortField) => {
    setSortBy(sortField) // Set the field to sort by (e.g., 'area' or 'population')
  }

  const handleSortOrderChange = (order) => {
    setSortOrder(order) // Set the sorting order ('asc' or 'desc')
  }

  return (
    <div
      className={`p-4 w-48 mb-4 ml-[5%] md:ml-0 max-h-14 flex items-center gap-4 shadow-lg rounded-md md:min-w-52 ${
        isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
      }`}
    >
      <select
        name="SortBy"
        id="sortBy"
        className="w-full bg-transparent focus:outline-none"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="area">Area</option>
        <option value="population">Population</option>
      </select>

      <div className="flex gap-2">
        <button
          className="p-2 border rounded"
          onClick={() => handleSortOrderChange("asc")}
        >
          <GoSortAsc />
        </button>
        <button
          className="p-2 border rounded"
          onClick={() => handleSortOrderChange("desc")}
        >
          <GoSortDesc />
        </button>
      </div>
    </div>
  )
}

export default SortBy
