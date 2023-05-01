import { useState } from "react";
import "../css/LightSwitch.css";

function LightSwitch(){

    // State Hook - variable, function that changes variable, useState, data (boolean, number, string)
    // Simple State - the setIsOn function changes the value of the variable and the only function that can do that
    let [isOn, setIsOn] = useState<boolean>(false);

    function setOffOrOn(){
        isOn ? setIsOn(false) : setIsOn(true);
    };

    function displayOnOff() : string {
        return isOn ? 'On' : "Off";
    };

    let lightSwitchClass = "LightSwitch " + (isOn ? "blueBackground" : "");

    // Light Switch Pt. 3 - Conditional Rendering
    return (
        <div className={lightSwitchClass}>
            <h1>Switch</h1>
            <p>{displayOnOff()}</p>

            {/* Original setup */}
            {/* <button onClick={() => setIsOn(true)}>On</button>
            <button onClick={() => setIsOn(false)}>Off</button> */}

            {/* Using setOffOrOn */}
            {/* <button onClick={() => setOffOrOn()}>On</button>
            <button onClick={() => setOffOrOn()}>Off</button> */}

            {/*Using Conditional Rendering w/Original Setup */}
            {/* {
                isOn ? <button onClick={() => setIsOn(false)}>Off</button> : <button onClick={() => setIsOn(true)}>On</button>
            } */}

            {/*Using Conditional Rendering w/setOffOrOn Setup */}
            {
                isOn ? <button onClick={() => setOffOrOn()}>Off</button> : <button onClick={() => setOffOrOn()}>On</button>
            }

        </div>
    );
};

export default LightSwitch;