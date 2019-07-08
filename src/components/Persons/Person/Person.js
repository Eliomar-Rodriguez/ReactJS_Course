import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {
    inputFocus() {
        if (this.props.position === 0)
            this.inputElement.current.focus();
    }
    render() {
        return (
            //Aux hace lo mismo que React.Fragment
            <Aux classes={classes}> 
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" value={this.props.name} name={this.props.name} onChange={this.props.change} />
            </Aux>
        )
    }

};

// esto valida que los datos que recibe este componente por props sean de los tipos especificados aqui
Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

// If I export this class like default can be import with a name that you want
export default withClass(Person, classes.Person);