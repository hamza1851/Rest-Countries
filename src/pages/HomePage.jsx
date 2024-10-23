import React from "react"
import Navbar from "../components/Navbar"
import SearchSection from "../components/SearchSection"
import Cards from "../components/Cards"
import { AppProvider } from "../context/AppContext"
const HomePage = () => {
  return (
    <AppProvider>
      <Navbar />

      <SearchSection />
      <Cards />
    </AppProvider>
  )
}

export default HomePage
