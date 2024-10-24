import React from "react"
import Card from "./Card"
import { useAppContext } from "../context/AppContext"

const Cards = () => {
  const {
    searchTerm,
    countryData,
    selectedRegion,
    selectedSubregion,
    sortBy,
    sortOrder,
  } = useAppContext()

  let filteredCountries = countryData

  if (selectedRegion) {
    if (selectedSubregion) {
      filteredCountries = filteredCountries.filter(
        (country) => country.subregion === selectedSubregion
      )
    } else {
      filteredCountries = filteredCountries.filter(
        (country) => country.region === selectedRegion
      )
    }
  }

  if (searchTerm) {
    // First, check for a full match
    const fullMatch = filteredCountries.find(
      (country) =>
        country.name.common.toLowerCase() === searchTerm.toLowerCase()
    )

    // If a full match exists, return only that result
    if (fullMatch) {
      filteredCountries = [fullMatch]
    } else {
      // If no full match, filter for partial matches
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  }

  if (filteredCountries.length === 0) {
    return <p>No countries match your search criteria.</p>
  }

  // Sort by area or population
  if (sortBy === "area") {
    filteredCountries = filteredCountries.sort((a, b) =>
      sortOrder === "asc" ? a.area - b.area : b.area - a.area
    )
  } else if (sortBy === "population") {
    filteredCountries = filteredCountries.toSorted((a, b) =>
      sortOrder === "asc"
        ? a.population - b.population
        : b.population - a.population
    )
  }
  return (
    <section className="max-w-[1150px] mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
      {filteredCountries.map((country, idx) => (
        <Card
          key={idx}
          flag={country.flags.svg}
          countryName={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          area={country.area}
        />
      ))}
    </section>
  )
}

export default Cards
