import React from 'react';

const validation = (props)=>{
    let display;
    if (props.length > 5)
        display =  "Text is too large"
    else
        display = "Text is too short"
    return(
        <div>
            <p>{display}</p>
        </div>
    );
}

export default validation;