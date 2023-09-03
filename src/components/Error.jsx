import { useRouteError } from "react-router-dom";

export default function Error(){
    const {statusText, message} = useRouteError()

    return (
        <main>
            <h1> {statusText} </h1>
            <p> {message} </p>
        </main>
    )
}