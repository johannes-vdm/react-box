import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });
    }

    return (
        <>
            <input
                value={state.name}
                onChange={handleInputChange}
            />
            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    );
}
