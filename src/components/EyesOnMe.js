// Code EyesOnMe Component Here
import React, {useState} from 'react';

function EyesOnMe(){

    // function checkFocus(){
    //     onFocus={(e) => {
    //         console.log('Good'); 
    // }

    return(
        <div>
            <button 
            onFocus={()=>console.log('Good!')}
            onBlur={()=>console.log('Hey! Eyes on me!')}
            >Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;
