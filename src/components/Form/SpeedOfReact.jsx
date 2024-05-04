import { useState } from 'react';
import CodeBlock from "../blocks/CodeBlock.jsx";

export default function MovingDot() {
    const [renderData, setRenderData] = useState({
        position: { x: 0, y: 0 },
        startTime: 0,
        endTime: 0,
        endTimeEvent: 0
    });

    const startTimeStamp = performance.now();

    const handlePointerMove = e => {
        const currentTime= performance.now();
        setRenderData(prevState => ({
            ...prevState,
            position: { x: e.clientX, y: e.clientY },
            startTime: startTimeStamp,
            endTime: currentTime,
            endTimeEvent: e.timeStamp
        }));
    };

    const { position, startTime, endTime,endTimeEvent } = renderData;

    return (
        <>
            <h2>X: {position.x}</h2>
            <h3>Y: {position.y}</h3>
            <h4>Delay: {(endTime - startTime).toFixed(2)} ms</h4>
            <h4>Delay3: {(endTimeEvent-startTime).toFixed(2)} ms</h4>
            <h4>Delay2: {(endTime - endTimeEvent).toFixed(2)} ms</h4>
            <div
                onPointerMove={handlePointerMove}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '50vh',
                    border: 'green solid 2px',
                }}>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: 'calc(-40px)',
                    top: 'calc(-30vh + 20px)',
                    width: 20,
                    height: 20,
                }}/>
            </div>
            <CodeBlock data={renderData}/>
        </>
    )
}
