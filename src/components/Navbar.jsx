import React from "react"
import { MdOutlineDarkMode } from "react-icons/md"

const Navbar = () => {
  return (
    <>
      <nav className="shadow-lg flex items-center p-5 mb-8 px-auto">
        <h1 className="ml-20 mr-auto font-bold text-2xl">
          Where in the world ?
        </h1>
        <div className="flex align-middle">
          <MdOutlineDarkMode className="mr-2 h-5" />
          <p className="mr-2">Dark Mode</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar
