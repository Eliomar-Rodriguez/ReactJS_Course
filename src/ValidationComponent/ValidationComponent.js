import React from 'react';

const validationComponent = (props) => {
    let mensaje = null;
    if(props.textLength < 5)
        mensaje = 'Text too short.';
    else
        mensaje = 'Text long enough.';
    return(
        <p>{mensaje}</p>
    );
}

export default validationComponent;