import * as React from "react";

export default function CodeBlock({data}) {
    return (
        <div style={{backgroundColor: 'black', color: 'navajowhite', padding: '.5rem', margin: '.5rem 0', borderRadius: '.3rem'}}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
