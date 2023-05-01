import { useState } from 'react';
import "../css/UpDownCounter.css";

function UpDownCounter(){
    const [counterValue, setCounter] = useState<number>(0);
    
    return (
        <div className="upDownCounter">
        
        <div className="counter">
            <h3>Counter</h3>
            <div className="inputContainer">
                <button className="button-counterUp" onClick={() => setCounter(counterValue + 1)}>Up</button>
                <input className="counterCurrent" type="number" value={counterValue}></input>
                <button className="button-counterDown" onClick={() => setCounter(counterValue - 1)}>Down</button>
            </div>
        </div>

        </div>
    )
};

export default UpDownCounter;