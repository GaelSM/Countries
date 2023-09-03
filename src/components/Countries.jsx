import { useMemo, useRef, useState } from "react"
import data from "@/data.json"
import Card from "@components/Card"

export default function Countries() {

    const [countryName, setCountryName] = useState("")
    const [region, setRegion] = useState("")
    const [countriesData, setCountriesData] = useState(data)

    const dataRef = useRef(countriesData)

    const preventSubmit = (event) => {
        event.preventDefault()
    }

    const filteredUsers = useMemo(() => {
        if(countryName === "" && region === "") return dataRef.current

        const countryRegExp = new RegExp(`^${countryName}`, "i")
        
        if(countryName !== "" && region === "") return dataRef.current.filter(({name}) => countryRegExp.test(name))
        if(region !== "" && countryName === "") return dataRef.current.filter(country => country.region === region)
        if(region !== "" && countryName !== ""){
            return dataRef.current.filter(country => countryRegExp.test(country.name) && country.region === region)
        }
    }, [countryName, region])


    return (    
        <main className="countries">
            <form onSubmit={preventSubmit}>
                <input 
                    type="text" 
                    name="countryName"
                    placeholder="Search for a country..."
                    autoComplete="off"
                    onChange={(e) => setCountryName(e.target.value)} 
                />
                <select 
                    name="continent" 
                    defaultValue="none" 
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="none" disabled hidden> Filter by region </option>
                    <option value="Africa"> Africa </option>
                    <option value="Americas"> America </option>
                    <option value="Asia"> Asia </option>
                    <option value="Europe"> Europe </option>
                    <option value="Oceania"> Oceania </option>
                    <option value=""> All </option>
                </select>
            </form>
            <section className="cards-container">
                {
                    filteredUsers.length === 0
                    ? <h2> No results </h2>
                    : filteredUsers.map((country) => <Card key={country.alpha3Code} {...country}/>)
                }
            </section>
        </main>
    )
}