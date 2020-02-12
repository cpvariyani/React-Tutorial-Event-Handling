import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee';

// function App() {
//   return <div className="App">This is react example.</div>;
// }

class App extends Component {
  state = {
    employees: [
      {
        Name: 'CP Variyani',
        Skills: 'React, C# ,Angular'
      },
      {
        Name: 'Vibhu',
        Skills: 'React, Html, CSS'
      }
    ],

    heading: 'This is react example'
  };

  UpdateEmployeeDataHandler = () => {
    console.log('it is clicked');

    this.setState({
      employees: [
        {
          Name: 'CP',
          Skills: 'React'
        },
        {
          Name: 'Vibhu Khurana',
          Skills: 'React'
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>List of Employees</h1>

        <button onClick={this.UpdateEmployeeDataHandler}>
          Update Employee Data
        </button>
        <span>{this.state.heading}</span>
        <Employee
          Name={this.state.employees[0].Name}
          Skills={this.state.employees[0].Skills}
        />
        <Employee
          Name={this.state.employees[1].Name}
          Skills={this.state.employees[1].Skills}
        />
      </div>
    );
  }
}

export default App;
