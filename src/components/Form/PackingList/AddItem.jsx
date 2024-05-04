import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function AddItem({ onAddItem }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add item"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddItem(title);
            }}>Add</button>
        </>
    )
}
