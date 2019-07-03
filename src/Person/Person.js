import React from 'react';

import './Person.css';
const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
            <input type="text" value={props.name} name={props.name} onChange={props.changed}/>
        </div>
    )
};  
// If I export this class like default can be import with a name that you want
export default person; 