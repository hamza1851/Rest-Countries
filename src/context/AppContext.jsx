import React, { createContext, useState, useEffect, useContext } from "react"

// Create the context
const AppContext = createContext()

// Custom hook for consuming context
export const useAppContext = () => {
  return useContext(AppContext)
}

// Provider component to wrap around the app
export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("") //Track term entered by the user
  const [countryData, setCountryData] = useState([]) //Contains countries data
  const [selectedRegion, setSelectedRegion] = useState("") // Track the selected region
  const [regions, setRegions] = useState([]) // Track available regions
  const [subregions, setSubregions] = useState([]) // Track available subregions
  const [selectedSubregion, setselectedSubregion] = useState("") // Track selected subregion
  useEffect(() => {
    const fetchCountries = async () => {
      const resp = await fetch("https://restcountries.com/v3.1/all")
      const data = await resp.json()
      setCountryData(data)

      const uniqueRegions = [...new Set(data.map((country) => country.region))]
      setRegions(uniqueRegions)

    }
    fetchCountries()
  }, [])

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        countryData,
        selectedRegion,
        setSelectedRegion,
        regions,
        subregions,
        setSubregions,
        selectedSubregion,
        setselectedSubregion,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
