import React from "react"
import Card from "./Card"
import getFilteredCountries from "../utils/getFilteredCountries"
import { useAppContext } from "../context/AppContext"

const Cards = () => {
  const { isDark } = useAppContext()
  const filteredCountries = getFilteredCountries()

  return (
    <section
      className={`max-w-[1150px] mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 ${
        isDark ? "bg-[#202C37]" : "bg-[#ffff]"
      }`}
    >
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
