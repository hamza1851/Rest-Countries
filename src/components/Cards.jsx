import React from "react"
import Card from "./Card"
import getFilteredCountries from "../utils/getFilteredCountries"

const Cards = () => {
  const filteredCountries = getFilteredCountries()
  return (
    <section className="max-w-[1150px] mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
      {filteredCountries.map((country, idx) => (
        <Card
          key={country.ccn3}
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
