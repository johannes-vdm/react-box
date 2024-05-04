import {useState} from 'react';

export default function MovingDot() {
    const [delay, setDelay] = useState(0);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    let start = 0;
    let end = 0;

    return (
        <>
            <h2>X: {position.x}</h2>
            <h2>Y: {position.y}</h2>
            <h1>Delay: {delay} ms</h1>
            <div
                onPointerMove={e => {
                    start = Date.now();
                    end = 0;
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    end =  Date.now() - start;
                    setDelay(end);
                }}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '70vh',
                    border: 'green solid 2px',
                }}>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -40,
                    top: -160,
                    width: 20,
                    height: 20,
                }}/>
            </div>
        </>
    )
}
