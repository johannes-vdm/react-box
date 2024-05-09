import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, Link, RouterProvider,} from "react-router-dom";

import './reset.css'

import {Home} from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ContactForm from "./components/Sections/Forms/ContactForm.jsx";
import ErrorForm from "./components/Sections/Forms/ErrorForm.jsx";
import V6ErrorForm from "./components/Sections/Forms/V6ErrorForm.jsx";
import V7ErrorForm from "./components/Sections/Forms/V7ErrorForm.jsx";
import MovingDot from "./components/Sections/SpeedOfReact.jsx";
import TravelPlan from "./components/Sections/PackingList/App.jsx";
import SearchChinese from "./components/Sections/SearchChinese/SearchChinese.jsx";
import RetainingState from "./components/Sections/RetainingState.jsx";

import KeysOrder from "./components/Sections/Keys.jsx";
import {NoIndexAsKey} from "./components/Sections/NoIndexAsKey.jsx";
import ReactReducer from "./components/Sections/ReactReducer/ReactReducer.jsx";
import AdvancedState from "./components/Sections/AdvancedState/App.jsx";

// eslint-disable-next-line react-refresh/only-export-components,react/prop-types
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
        path: 'packing-list',
        element: (
            <Format>
                <TravelPlan/>
            </Format>
        )
    },
    {
        path: 'search-chinese',
        element: (
            <Format>
                <SearchChinese/>
            </Format>
        )
    },
    {
        path: 'retaining-state',
        element: (
            <Format>
                <RetainingState/>
            </Format>
        )
    },
    {
        path: 'keys-order',
        element: (
            <Format>
                <KeysOrder/>
            </Format>
        )
    },
    {
        path: "no-index",
        element: (
            <Format>
                <NoIndexAsKey/>
            </Format>
        )
    },
    {
        path: "react-reducer",
        element: (
            <Format>
                <ReactReducer/>
            </Format>
        )
    },
    {
        path: "advanced-state",
        element: (
            <Format>
                <AdvancedState/>
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