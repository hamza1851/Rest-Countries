import React from "react"
import SearchSection from "../components/SearchSection"
import Cards from "../components/Cards"
import { AppProvider } from "../context/AppContext"
const HomePage = () => {
  return (
    <AppProvider>
      <SearchSection />
      <Cards />
    </AppProvider>
  )
}

export default HomePage
