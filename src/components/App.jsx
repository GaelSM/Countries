import { Outlet } from "react-router-dom"
import Header from "@components/Header"
import "@components/App.css"

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}