import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, Link, RouterProvider,} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ContactForm from "./components/Form/ContactForm.jsx";
import ErrorForm from "./components/Form/ErrorForm.jsx";
import V6ErrorForm from "./components/Form/V6ErrorForm.jsx";
import PropTypes from "prop-types";
import V7ErrorForm from "./components/Form/V7ErrorForm.jsx";
import MovingDot from "./components/Form/SpeedOfReact.jsx";


const Format = ({children}) => {

    return <div>
        <Link to={'/'}>
            <button>Home</button>
        </Link>
        {children}
    </div>
}

Format.propTypes = {
    children: PropTypes.any,
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home/>
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
        path: '/v6-error-form',
        element: (
            <Format>
                <V6ErrorForm/>
            </Format>
        )
    }, {
        path: '/v7-error-form',
        element: (
            <Format>
                <V7ErrorForm/>
            </Format>
        )
    },
    {
        path: 'speed-of-react',
        element: (
            <Format>
                <MovingDot/>
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