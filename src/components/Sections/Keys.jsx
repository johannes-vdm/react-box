import { useState } from 'react';

export default function KeysOrder() {
    const [reverse, setReverse] = useState(false);
    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
        </label>
    );
    if (reverse) {
        return (
            <>
                <Field label="Last name" key={'last'}/>
                <Field label="First name" key={'first'}/>
                {checkbox}
            </>
        );
    } else {
        return (
            <>
                <Field label="First name" key={'first'} />
                <Field label="Last name" key={'last'} />
                {checkbox}
            </>
        );
    }
}

// eslint-disable-next-line react/prop-types
function Field({ label }) {
    const [text, setText] = useState('');
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={text}
                placeholder={label}
                onChange={e => setText(e.target.value)}
            />
        </label>
    );
}
