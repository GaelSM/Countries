import { useEffect, useState } from "react"


export default function Header() {

    const [theme, setTheme] = useState("")

    const changeTheme = () => {
        if (localStorage.getItem("countries-theme") === "dark") {
            document.documentElement.setAttribute("theme", "white")
            localStorage.setItem("countries-theme", "white")
            setTheme("Dark Mode")
        }
        else {
            document.documentElement.setAttribute("theme", "dark")
            localStorage.setItem("countries-theme", "dark")
            setTheme("Light Mode")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("countries-theme") === null) {
            localStorage.setItem("countries-theme", "white")
            document.documentElement.setAttribute("theme", "white")
            setTheme("Dark Mode")
        } else {
            const scheme = localStorage.getItem("countries-theme")
            document.documentElement.setAttribute("theme", scheme)
            if(scheme === "white") setTheme("Dark Mode")
            else setTheme("Light Mode")
        }
    }, [])

    return (
        <header>
            <h1> Where in the world? </h1>
            <button onClick={changeTheme}>
                {
                    theme === "Light Mode"
                    ? <i className="fa-solid fa-sun"></i>
                    : <i className="fa-solid fa-moon"></i>
                    
                }
                <p> {theme} </p>
            </button>
        </header>
    )
}