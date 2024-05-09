import Form from './Advanced.jsx'
import {useReducer} from "react";
import CodeBlock from "../../Blocks/CodeBlock.jsx";


function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "click": {
            return {
                type: action.type,
                state: 'test'
            }
        }
    }
}

const ButtonTest = () => {
    const initialState = {};
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(dispatch);
    const handleClick = (e) => {
        dispatch({
            "type": 'click',
            "event": e
        })
    }
    return (
        <>
            <CodeBlock data={state}></CodeBlock>
            <button onClick={handleClick}>Test</button>
        </>
    )
}


export default function ReactReducer() {
    return (
        <>
            <p>React Sample</p>
            <Form/>
            <p>My test</p>
            <ButtonTest/>
            <p>My advanced test</p>
            <LargeTest/>
        </>
    )
}

function LargeTest() {
    const initialState = {};
    const [state, dispatch] = useReducer(reducer2, initialState);

    const changeHandler = (e) => {
        dispatch({
            "type": "change_text",
            "value": e.target.value
        })
    }


    return (
        <>
            <CodeBlock data={state}/>
            <input type="text" onChange={changeHandler}/>
        </>
    )


    function reducer2(state, action) {
        console.log(state);
        console.log(action);
        switch (action.type) {
            case 'change_text': {
                return {
                    'data':action.value
                }
            }
        }
    }
}

