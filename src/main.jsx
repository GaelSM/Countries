import ReactDOM from 'react-dom/client'
import App from '@components/App.jsx'
import Error from "@components/Error.jsx"
import Countries from "@components/Countries.jsx"
import Country from '@components/Country.jsx'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/:countryName",
                element: <Country />
            },
            {
                path: "/",
                element: <Countries />
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)