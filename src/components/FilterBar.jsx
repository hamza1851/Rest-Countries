import React from "react"
import { useAppContext } from "../context/AppContext"

const FilterBar = () => {
  const {
    regions,
    setSelectedRegion,
    setselectedSubregion,
    setSubregions,
    isDark,
  } = useAppContext()

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value
    setSelectedRegion(selectedRegion)

    if (!selectedRegion) {
      setSubregions([])
      setselectedSubregion("")
    }
  }

  return (
    <div
      className={`p-4 w-48 max-h-14 ml-[5%] md:ml-0 flex items-center gap-4 shadow-lg rounded-md md:min-w-52 ${
        isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
      }`}
    >
      <select
        className="w-full bg-transparent focus:outline-none"
        onChange={handleRegionChange}
      >
        <option value="">All Regions</option>
        {regions.map((region, idx) => (
          <option key={idx} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
