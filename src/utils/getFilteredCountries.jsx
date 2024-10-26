import { useAppContext } from "../context/AppContext"

export default function getFilteredCountries() {
  const {
    searchTerm,
    countryData,
    selectedRegion,
    selectedSubregion,
    sortBy,
    sortOrder,
  } = useAppContext()

  let filteredCountries = [...countryData]

  // Filter by region and subregion
  if (selectedRegion) {
    filteredCountries = selectedSubregion
      ? filteredCountries.filter(
          (country) => country.subregion === selectedSubregion
        )
      : filteredCountries.filter((country) => country.region === selectedRegion)
  }

  // Filter by search term
  if (searchTerm) {
    const fullMatch = filteredCountries.find(
      (country) =>
        country.name.common.toLowerCase() === searchTerm.toLowerCase()
    )
    filteredCountries = fullMatch
      ? [fullMatch]
      : filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
  }

  // Sort countries
  if (sortBy === "area") {
    filteredCountries = filteredCountries.sort((a, b) =>
      sortOrder === "asc" ? a.area - b.area : b.area - a.area
    )
  } else if (sortBy === "population") {
    filteredCountries = filteredCountries.sort((a, b) =>
      sortOrder === "asc"
        ? a.population - b.population
        : b.population - a.population
    )
  }

  return filteredCountries
}
