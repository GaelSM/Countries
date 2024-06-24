import { Link } from "react-router-dom"

export default function Card(props){

    const population = new Intl.NumberFormat().format(props.population)

    return (
        <article>
            <Link to={`/${props.alpha2Code}`} />
            <div className="img">
                <img src={props.flag} alt={`${props.name} flag`} />
            </div>
            <div className="text">
                <h2> {props.name} </h2>
                <p><span>Population:</span> { population } </p>
                <p><span>Region:</span> {props.region} </p>
                <p><span>Capital:</span> {props.capital} </p>
            </div>
        </article>
    )
}