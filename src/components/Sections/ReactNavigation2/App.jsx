import { useState } from "react";
import ButtonLink from "./ButtonLink.jsx";
import CodeBlock from "../../Blocks/CodeBlock.jsx";

export default function PreventSubmit() {
    const [isDirty, setIsDirty] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleDirty = () => {
        // Perform logic to handle dirty fields
        console.log("Dirty fields detected!");
    };

    const handleClick = () => {
        // Custom onClick logic
        console.log("Button clicked!");
        // Returning false here would prevent default behavior
    };

    const handleInputChange = (e) => {
        // Update input value
        setInputValue(e.target.value);
        // Mark as dirty when input is touched
        setIsDirty(true);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter something"
            />
            <ButtonLink
                to="/other-page"
                isDirty={isDirty}
                handleDirty={handleDirty}
                onClick={handleClick}
            >
                Click Me
            </ButtonLink>
            <CodeBlock data={isDirty}/>
        </div>
    );
}
