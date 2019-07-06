import React, { PureComponent } from 'react';
import Person from './Person/Person';

class persons extends PureComponent { // pure component se encarga de validar si hubo cambios y si es asi, entonces renderiza, sino no
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate");
        if (nextProps.persons !== this.props.persons ||
            nextProps.clicked !== this.props.clicked ||
            nextProps.changed !== this.props.changed) {
            return true;
        } else {
            return false;
        }
    };
    render() {
        return (this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                change={(event) => this.props.changed(event, person.id)} />
        }))
    }
}


export default persons;