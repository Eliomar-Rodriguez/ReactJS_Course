import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    const assignedClasses = [];
    let btnclass = '';
    if (props.showPersons)
        btnclass = classes.red;

    if (props.persons.length <= 2)
        assignedClasses.push(classes.red)
    if (props.persons.length <= 1)
        assignedClasses.push(classes.bold)


    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnclass}
                onClick={props.clicked}>
                Toggle person
            </button>
        </div>
    );
}

export default cockpit;