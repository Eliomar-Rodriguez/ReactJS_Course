import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { id: 'kjn123', name: 'Eliomar', age: 22 },
      { id: 'asd2', name: 'Antonio', age: 23 },
      { id: 'ad3f3', name: 'Brasil', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: ''
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //se puede usar esta forma o
    const persons = [...this.state.persons]; // o esta, es lo mismo
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deleteCharHandler = (index) => {
    let userInput = this.state.userInput.split('');
    userInput.splice(index, 1);
    var input = userInput.join('');
    this.setState({ userInput: input });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}  />
        </div>
      );
    }

    
    return (
      <div className={classes.App} >
       <Cockpit
       showPersons={this.state.showPersons}
       persons={this.state.persons}
       clicked={this.togglePersonHandler}/> 
        {
          persons // puede manejarse de esta manera, o con { this.state.showPersons ? algo para true : algo para false }
        }
      </div>
    )
  }
}


export default App;
