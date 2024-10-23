import React from "react"
import { useAppContext } from "../context/AppContext"

const FilterBar = () => {
  const { regions, setSelectedRegion } = useAppContext()

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value)
  }

  return (
    <div className="p-4 max-w-32 max-h-14 flex items-center gap-4 shadow-2xl rounded-md md:min-w-52">
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
