import {useState} from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    return (
        <>
            <h2>X: {position.x}</h2>
            <h2>Y: {position.y}</h2>
            <div
                onPointerMove={e => {
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
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
