import React from "react"

const Card = ({ flag, countryName, population, region, capital, area }) => {
  return (
    <div className="w-full max-w-[448px]  mx-auto  min-h-[404px] md:min-h-[339px] rounded-lg shadow-lg cursor-pointer  flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105">
      {/* Flag Image */}
      <div className="w-full h-1/2 max-h-[225px]">
        <img
          src={flag}
          alt={`${countryName} flag`}
          className="w-full h-full rounded-t-lg"
        />
      </div>

      {/* Country Details */}
      <div className="h-44 p-4 md:p-8 flex-1 flex flex-col justify-center bg-white">
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
