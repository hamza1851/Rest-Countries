import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import Spinner from "./Spinner"
import GetBorders from "./GetBorders"

const CountryDetails = () => {
  const [country, setCountry] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleBackBtn = () => {
    navigate("/")
  }

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${id}`)
        const data = await res.json()

        setCountry(data[0]) // Set the first country in the array
      } catch (error) {
        console.log(error)
      }
    }
    fetchCountryData()
  }, []) // Add id to dependency array

  return (
    <div className="w-full">
      {country ? (
        <section className="w-4/5 max-w-6xl mx-auto">
          <div
            className="cursor-pointer w-28 p-2 text-center mb-8 rounded-lg shadow-lg flex justify-center gap-2 border-slate-600"
            onClick={handleBackBtn}
          >
            <IoIosArrowRoundBack />
            Back
          </div>
          <div className="md:flex md:justify-between">
            <div className="w-full md:w-[45%]">
              <img src={country.flags.svg} alt="" className="w-full" />
            </div>

            <div className="w-[50%]">
              <h1 className="mb-4 text-3xl font-extrabold">
                {country.name.common}
              </h1>
              <div className="w-full  md:flex md:justify-between">
                <div className="w-[45%] flex flex-col mb-8 md:mb-0">
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">
                      Native Name:
                    </span>
                    <span className="text-base">{country.name.common}</span>
                  </span>
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">
                      Population:
                    </span>
                    <span className="text-base">{country.population}</span>
                  </span>
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">Region:</span>
                    <span className="text-base">{country.region}</span>
                  </span>
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">
                      Sub Region:
                    </span>
                    <span>{country.subregion}</span>
                  </span>
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">Capital:</span>
                    <span className="text-base">{country.capital}</span>
                  </span>
                </div>
                <div className="w-[45%] flex flex-col">
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">
                      Top Level Domain:
                    </span>
                    <span className="text-base">{country.tld[0]}</span>
                  </span>
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">
                      Currencies:
                    </span>
                    <span className="text-base">{country.currency} </span>
                  </span>
                  <span className="mb-2">
                    <span className="mr-1 text-base font-bold ">Languages</span>
                    <span className="text-base">
                      {Object.values(country.languages).join(", ")}{" "}
                    </span>
                  </span>
                </div>
              </div>
              <GetBorders borders={country.borders} />
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default CountryDetails
