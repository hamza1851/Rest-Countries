import React from "react"
import { MdOutlineDarkMode } from "react-icons/md"

const Navbar = () => {
  return (
    <div className="w-full shadow-lg p-5 mb-8">
      <nav className="max-w-6xl flex items-center mx-auto">
        <h1 className="mr-auto font-bold text-2xl">Where in the world ?</h1>
        <div className="flex align-middle">
          <MdOutlineDarkMode className="mr-2 h-5" />
          <p className="mr-2">Dark Mode</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
