import React from "react"

const FilterBar = () => {
  return (
    <div className="p-4 max-w-32 max-h-14 flex items-center gap-4 shadow-2xl rounded-md md:min-w-52">
      <select className="w-full bg-transparent">
        <option value="America">America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default FilterBar
