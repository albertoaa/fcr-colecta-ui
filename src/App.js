import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">¡Inscríbete ya! o ¡Invita más amigos!</h1>
        </header>
        <div>
          <TextField 
            id = "email"
            label="Email"
            placeholder="Ingresa tu correo electrónico"
            className="homepage-text-field" 
          />
          <Button variant="raised" className="homepage-button">
            Ingresar
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
