import { useState } from "react";

export default function RetainingState() {
    const [showHint, setShowHint] = useState(false);
    return (
        <div>
            {showHint && (
                <p>
                    <i>Hint: Your favorite city?</i>
                </p>
            )}
            {showHint ? (
                <Form />
            ) : (
                <>
                    <p>test</p>
                    <Form />
                </>
            )}
            <Form />
            {showHint ? (
                <button
                    onClick={() => {
                        setShowHint(false);
                    }}
                >
                    Hide hint
                </button>
            ) : (
                <button
                    onClick={() => {
                        setShowHint(true);
                    }}
                >
                    Show hint
                </button>
            )}
        </div>
    );
}

function Form() {
    const [text, setText] = useState("");
    return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
