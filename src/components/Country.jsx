import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import data from "@/data.json"

export default function Country() {

    const { pathname } = useLocation()
    const [country, setCountry] = useState({})

    useEffect(() => {
        const currentCountryCode = pathname.split("/")[1]
        const currentCountry = data.find(element => element.alpha2Code === currentCountryCode)
        setCountry(currentCountry)
    }, [])


    return (
        <main className="country">
            <div className="back">
                <Link to={"/"} />
                <i className="fa-solid fa-arrow-left-long"></i>
                <p> Back </p>
            </div>
            <section className="content">
                <div className="left">
                    <img src={country.flag} alt={`${country.name} flag`} />
                </div>
                <div className="information">
                    <div className="top">
                        <h2> {country.name} </h2>
                        <div className="data">
                            <div>
                                <p><span>Native Name:</span> {country.nativeName} </p>
                                <p><span>Population:</span> {new Intl.NumberFormat().format(country.population)} </p>
                                <p><span>Region:</span> {country.region} </p>
                                <p><span>Sub Region:</span> {country.subregion} </p>
                                <p><span>Capital:</span> {country.capital} </p>
                            </div>
                            <div>
                                <p><span>Top Level Domain:</span> {country.topLevelDomain} </p>
                                <p>
                                    <span>Currencies:</span> {country.currencies && country.currencies[0].name} 
                                </p>
                                <p><span>Languages: </span>
                                    {
                                        country.languages?.map(({ name }, index) => country.languages.length - 1 === index
                                            ? name
                                            : name + ", "
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <p><span>Border Countries:</span></p>
                        <div className="codes">
                            {
                                country.borders?.slice(0,3).map(code => <div key={code}> {code} </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}       