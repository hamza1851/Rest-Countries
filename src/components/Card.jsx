import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

const Card = ({ flag, countryName, population, region, capital, area }) => {
  const { isDark } = useAppContext()
  const navigate = useNavigate()
  const NavigateToDetails = () => {
    navigate(`country/${countryName}`)
  }
  return (
    <div
      onClick={NavigateToDetails}
      className={`w-full max-w-[448px]  mx-auto  min-h-[404px] md:min-h-[339px] rounded-lg shadow-lg cursor-pointer  flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden ${
        isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
      }`}
    >
      {/* Flag Image */}
      <div className="w-full h-[225px] md:h-[160px]">
        <img
          src={flag}
          alt={`${countryName} flag`}
          className="w-full h-full rounded-t-lg object-fill"
        />
      </div>

      {/* Country Details */}
      <div
        className={`h-44 p-4 md:p-8 flex-1 flex flex-col justify-center${
          isDark ? "bg-[#2B3945]" : "bg-[#ffff]"
        }`}
      >
        <h1 className="text-lg font-bold mb-2">{countryName}</h1>
        <p className="text-sm mb-1">
          <span className="font-bold">Population:</span>{" "}
          {population.toLocaleString()}
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold">Region:</span> {region}
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold">Capital:</span> {capital?.[0] ?? "N/A"}
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold">Area:</span> {area ? area : "N/A"}
        </p>
      </div>
    </div>
  )
}

export default Card
