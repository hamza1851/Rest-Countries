import React, { useEffect } from "react"
import { useAppContext } from "../context/AppContext"

const Subregion = () => {
  const {
    subregions,
    setSubregions,
    selectedRegion,
    setselectedSubregion,
    countryData,
    isDark,
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
    <div
      className={`p-4 w-48 mb-4 ml-[5%] md:ml-0 max-h-14 flex items-center gap-4 shadow-lg rounded-md md:min-w-52 ${
        isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
      }`}
    >
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
