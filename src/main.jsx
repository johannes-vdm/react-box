import * as React from "react";
import {useEffect, useState} from "react";
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
import ImageContext from "./components/Sections/UseContext/ImageContext.jsx";
import FormPage from "./components/Sections/ReactNaviation.jsx";
import Page2 from "./components/Sections/Navigation2/Form.jsx";
import PreventSubmit from "./components/Sections/ReactNavigation2/App.jsx";

// eslint-disable-next-line react/prop-types,react-refresh/only-export-components
const Format = ({isHome, children}) => {
    const [serverStatus, setServerStatus] = useState(false);

    const jsonServerURL = 'http://localhost:3000';

    const checkServerStatus = async () => {
        try {
            const response = await fetch(jsonServerURL);
            console.log(response);
            setServerStatus(response.ok ? 'active' : 'not active');
        } catch (error) {
            console.error('Error checking server status:', error);
            setServerStatus('not active');
        }
    };

    useEffect(() => {
        checkServerStatus().then(()=>{})
    }, []);

    return (
        <div>
            <p style={{paddingBottom: '7px', paddingTop: '7px '}}><Link target={"_blank"} to={jsonServerURL}>JSON Server: </Link><span style={{color: serverStatus ? 'greenyellow' : 'orangered'}}>{serverStatus}</span></p>
            <div>
                {!isHome && <Link to={'/'}>
                    <button>Home</button>
                    <br/>
                    <br/>
                </Link>}
                {children}
            </div>
        </div>
    );
};


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Format isHome={true}>
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
        path: "image-context",
        element: (
            <Format>
                <ImageContext/>
            </Format>
        )
    },
    {
        path: "react-navigation/page1",
        element: (
            <Format>
                <FormPage/>
            </Format>
        )
    },
    {
        path: "react-nav-2",
        element: (
            <Format>
                <PreventSubmit/>
            </Format>
        )
    },
    {
        path: "page-2",
        element: (
            <Format>
                <Page2/>
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