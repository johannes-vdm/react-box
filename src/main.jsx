import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, Link, RouterProvider,} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ContactForm from "./components/Form/ContactForm.jsx";
import ErrorForm from "./components/Form/ErrorForm.jsx";

const Format = ({children}) => {
    return <div>
        <Link to={'/'}>
        <button>Home</button>
        </Link>
        {children}
    </div>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Format>
                <Home/>
            </Format>
        )
    },
    {
        path: '/contact-form',
        element: (
            <Format>
                <ContactForm/>
            </Format>
        )
    },
    {
        path: '/error-form',
        element: (
            <Format>
                <ErrorForm/>
            </Format>
        )
    },
    {
        path: "*",
        element: <NotFound/>
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);