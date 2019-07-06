import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    const assignedClasses = [];
    let btnclass = '';
    if (props.showPersons)
        btnclass = classes.red;

    if (props.personsLength <= 2)
        assignedClasses.push(classes.red)
    if (props.personsLength <= 1)
        assignedClasses.push(classes.bold)


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnclass}
                onClick={props.clicked}>
                Toggle person
            </button>
        </div>
    );
}
//React.memo renderiza solo si hay cambios
export default React.memo(cockpit);