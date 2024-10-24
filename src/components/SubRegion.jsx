import React, { useEffect } from "react"
import { useAppContext } from "../context/AppContext"

const Subregion = () => {
  const {
    regions,
    subregions,
    setSubregions,
    selectedRegion,
    setselectedSubregion,
    countryData,
  } = useAppContext()

  useEffect(() => {
    if (selectedRegion) {
      const uniqueSubregions = [
        ...new Set(
          countryData
            .filter((country) => country.region === selectedRegion)
            .map((country) => country.subregion)
        ),
      ]
      setSubregions(uniqueSubregions)
    }
  }, [selectedRegion])

  const handleSubregionChange = (event) => {
    setselectedSubregion(event.target.value)
  }

  return (
    <div className="p-4 max-w-32 max-h-14 flex items-center gap-4 shadow-2xl rounded-md md:min-w-52">
      <select
        className="w-full bg-transparent focus:outline-none"
        onChange={handleSubregionChange}
      >
        <option value="">Subregions</option>
        {subregions.map((subregion, idx) => (
          <option key={idx} value={subregion}>
            {subregion}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Subregion
