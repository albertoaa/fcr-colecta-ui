import React, { Component } from 'react';
import EmailForm from './components/EmailForm'
import PersonalData from './components/PersonalData'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: "email",
      email: ""
    }
  }

  updateStep = (data) => {
    if (data.currentStep === "email") {
      if (!data.isRegistered) {
        this.setState({currentStep: "personalData"})
      }
    }
  }

  render() {
    return (
      <div className="App">
        <EmailForm currentStep={this.state.currentStep} onUpdateStep={this.updateStep}></EmailForm>
        <PersonalData currentStep={this.state.currentStep} onUpdateStep={this.updateStep}></PersonalData>
      </div>
    );
  }
}

export default App;
