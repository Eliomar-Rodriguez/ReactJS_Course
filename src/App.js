import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.red;
      //style.backgroundColor = 'red';
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2)
      assignedClasses.push(classes.red)
    if (this.state.persons.length <= 1)
      assignedClasses.push(classes.bold)

    let charComponents = null;

    charComponents = (
      <div>
        {
          this.state.userInput.split('').map((char, index) => {
            return <CharComponent
              key={char}
              click={() => this.deleteCharHandler(index)}
              index={index}
              char={char}
            />
          })
        }
      </div>
    )

    return (
      <div className={classes.App} >
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>
          Toggle person
        </button>
        {
          persons // puede manejarse de esta manera, o con { this.state.showPersons ? algo para true : algo para false }
        }
        <hr></hr>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <ValidationComponent textLength={this.state.userInput.length} />

        {charComponents}

      </div>
    )
  }
}


export default App;
