import React from 'react';

const CharComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.click}>
            <p>{props.char}</p>      
        </div>
    );
}

export default CharComponent;