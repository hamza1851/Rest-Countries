import React from "react"
import { useAppContext } from "../context/AppContext"

const FilterBar = () => {
  const { regions, setSelectedRegion, setselectedSubregion, setSubregions } =
    useAppContext()

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value
    setSelectedRegion(selectedRegion)

    if (!selectedRegion) {
      setSubregions([])
      setselectedSubregion("")
    }
  }

  return (
    <div className="p-4 max-w-32 max-h-14 flex items-center gap-4 shadow-lg rounded-md md:min-w-52">
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
