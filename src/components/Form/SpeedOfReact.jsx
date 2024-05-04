import { useEffect, useState } from 'react';

export default function MovingDot() {
    const [totalDelay, setTotalDelay] = useState(0);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    const [startTime, setStartTime] = useState(0);

    useEffect(() => {
        setStartTime(performance.now());
    }, []);

    useEffect(() => {
        const endTime = performance.now();
        console.table([{ startTime, endTime }]);
        setTotalDelay(endTime - startTime);
    }, [startTime]);

    const handlePointerMove = e => {
        const currentTime = performance.now();
        setStartTime(currentTime);
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    return (
        <>
            <h2>X: {position.x}</h2>
            <h2>Y: {position.y}</h2>
            <h1>Delay: {totalDelay} ms</h1>
            <p>{startTime}</p>
            <div
                onPointerMove={handlePointerMove}
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
                }} />
            </div>
        </>
    )
}
