import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CodeBlock from "../Blocks/CodeBlock.jsx";

export default function FormPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [isDirty, setIsDirty] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const prevLocation = usePrevious(location.pathname); // Custom hook to store previous location

    console.log(prevLocation)

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         if (isDirty) {
    //             event.preventDefault();
    //             event.returnValue = ""; // This message won't be shown in modern browsers
    //         }
    //     };
    //
    //     window.addEventListener("beforeunload", handleBeforeUnload);
    //
    //     return () => {
    //         window.removeEventListener("beforeunload", handleBeforeUnload);
    //     };
    // }, [isDirty]);

    useEffect(() => {
        const handleUnload = () => {
            console.log("WE ARE IN 2")

            window.confirm("Are you sure you want to leave? Your changes will be lost.")
            // Perform actions before the component unloads
        };
        window.addEventListener('unload', handleUnload);
        return () => {
            window.removeEventListener('unload', handleUnload);
        };
    }, []);


    // useEffect(() => {
        const handleBeforeUnload = (event) => {
            console.log("WE ARE IN")
            // Perform actions before the component unloads
            event.preventDefault();
            window.confirm("Are you sure you want to leave? Your changes will be lost.")
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        // return () => {
        //     window.removeEventListener('beforeunload', handleBeforeUnload);
        // };
    // }, []);

    // useEffect(() => {
    //     if (!isDirty) {
    //         return;
    //     }
    //
    //     // Clean up when component unmounts or location changes
    //     if (isDirty && prevLocation !== location.pathname && !window.confirm("Are you sure you want to leave? Your changes will be lost.")) {
    //         navigate(prevLocation); // Prevent navigation
    //     }
    // }, [isDirty, prevLocation, location.pathname, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setIsDirty(true);
    };

    const handleSave = () => {
        setIsDirty(false);
        // Perform save action
        // For demonstration purposes, we'll just log the data
        console.log("Form data saved:", formData);
    };

    const handleQuit = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>Come back to this</h1>
            <h1>Form Page</h1>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="button" onClick={handleSave}>
                    Save
                </button>
                <button type="button" onClick={handleQuit}>
                    Quit
                </button>
            </form>
            <CodeBlock data={{isDirty, formData}}/>
        </div>
    );
}

// Custom hook to store previous value
function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
