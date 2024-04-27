import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import ContactForm from "./components/ContactForm.jsx";

const Format = ({children}) => {
    return <div>
        <button>How do you like them apples</button>
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
        element: <ContactForm/>
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