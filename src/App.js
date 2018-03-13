import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {
  state = {
      value: ''
  }

  onChange=(value)=>{
      this.setState({value})
  };

  render() {
    const options = [{id: 395, category: "Megatron"}, {id: 396, category: "Star Scream"}, {id: 397, category: "Bumble Bee"}, ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <ReactSelect
            aria-labelledby="email-compose-subject-select-id"
            options={options}
            placeholder="Select ME"
            valueKey='id'
            labelKey='category'
            value={this.state.value}
            onChange={this.onChange}
          />
      </div>
    );
  }
}

export default App;
