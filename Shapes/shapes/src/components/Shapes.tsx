import { useState } from "react"

export function Shapes(){
    let [height, setHeight] = useState<number>(0);
    let [width, setWidth] = useState<number>(0);
    let [diameter, setDiameter] = useState<number>(0);
    let [isCircle, setIsCircle] = useState<boolean>(false);


    function setCircleLabel(){
        isCircle ? setIsCircle(false) : setIsCircle(true);
    };

    
    return (
        <div className="Shapes">
            <input type="number" value={0}></input>
            {
                isCircle ? <label onClick={() => setCircleLabel()}>Height/Width</label> : <label onClick={() => setCircleLabel()}>Diameter</label>
            }
            <input type="checkbox">Is Circle?</input>
        </div>
    )
};