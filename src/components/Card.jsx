import { Link } from "react-router-dom"

export default function Card({flag, name, population, region, capital, alpha2Code}){
    return (
        <article>
            <Link to={`/${alpha2Code}`} />
            <div className="img">
                <img src={flag} alt={`${name} flag`} />
            </div>
            <div className="text">
                <h2> {name} </h2>
                <p><span>Population:</span> {new Intl.NumberFormat().format(population)} </p>
                <p><span>Region:</span> {region} </p>
                <p><span>Capital:</span> {capital} </p>
            </div>
        </article>
    )
}