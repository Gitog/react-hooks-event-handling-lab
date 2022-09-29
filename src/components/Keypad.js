// Code Keypad Component Here
import React from 'react';


function Keypad (){

    function handleChnage(){
       
        console.log("Entering password...")
    }
    return (
        <div>
            <keypad>
                <input type="password" onChange={handleChnage}/>
            </keypad>
        </div>
    )
}

export default Keypad;