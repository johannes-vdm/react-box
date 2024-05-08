import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Contact({ contact }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <p key={contact.id}><b>{contact.name}</b></p>
            {expanded &&
                // eslint-disable-next-line react/prop-types
                <p><i>{contact.email}</i></p>
            }
            <button
                onClick={() => {
                    setExpanded(!expanded);
                }}>
                {expanded ? 'Hide' : 'Show'} email
            </button>
        </>
    );
}
