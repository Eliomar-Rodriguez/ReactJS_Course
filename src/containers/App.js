import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'kjn123', name: 'Eliomar', age: 22 },
      { id: 'asd2', name: 'Antonio', age: 23 },
      { id: 'ad3f3', name: 'Brasil', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  /*static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }*/

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
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

    this.setState((prevState, props) => { // la forma mas recomendada de actualizar el state si depende del previous state
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

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
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }


    return (
      <Aux >
        <button
          onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}
        >Remove cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler} />)
          : null}
        {
          persons // puede manejarse de esta manera, o con { this.state.showPersons ? algo para true : algo para false }
        }
      </Aux>
    )
  }
}


export default withClass(App, classes.App);
