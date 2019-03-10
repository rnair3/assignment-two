import React from 'react';

const charcomp = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={style}>
            <p>{props.text}</p>
        </div>
    );
}

export default charcomp;