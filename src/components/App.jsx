import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "@components/Header"
import "@components/App.css"

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })

  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}