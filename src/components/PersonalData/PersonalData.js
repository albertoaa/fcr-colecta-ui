import React from 'react'
import TextField from 'material-ui/TextField';
import DatePicker from 'react-datepicker';
import DatePickerUI from '../DatePickerUI'
// Is not "used" but is required to use in spanish...
import moment from 'moment/locale/es'

import 'react-datepicker/dist/react-datepicker.css';

class PersonalData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: {value: "", required: true, isValid: false, touched: false},
      lastname: {value: "", required: true, isValid: false, touched: false},
      identifier: {value: "", required: true, isValid: false, touched: false},
      birthday: {value: "", required: true, isValid: false, touched: false}
    }
  }

  handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    const hash = this.state[name]
    hash.value = value
    hash.isValid = this.isValid(name, value)
    this.setState({[name]: hash})
  }

  handleInputDate = (date, event, batman) => {
    this.setState({birthday: date.format('L')})
  }

  handleFocus = (event) => {
    const name = event.target.name
    const hash = this.state[name]
    hash.touched = true
    this.setState({[name]: hash})
  }

  isValid = (name, value) => {
    console.log(name, value, !this.state[name].required || value.length !== "")
    !this.state[name].required || value.length !== ""
  }

  render() {
    if (this.props.currentStep !== "personalData") {
      return null;
    }
    return (
      <div className="personal-data">
        <header className="App-header">
          <h1 className="App-title">Datos Personales</h1>
        </header>
        <div>
          <form>
            <TextField
              label="Nombre"
              name="firstname"
              placeholder="Ingresa tu nombre"
              onFocus={this.handleFocus}
              onChange={this.handleInput}
              value={this.state.firstname.value}
              error={this.state.touched && !this.state.isValid}
            /><br/>
            <TextField
              label="Apellido"
              name="lastname"
              placeholder="Ingresa tu apellido"
              value={this.state.lastname}
              required
              onChange={this.handleInput}
            /><br/>
            <TextField
              label="Cédula de Identidad"
              name="identifier"
              placeholder="Ingresa tu cédula de identidad"
              value={this.state.identifier}
              required
              onChange={this.handleInput}
            /><br/>
            <DatePicker
              customInput={<DatePickerUI label="Fecha de nacimiento"/>}
              name="birthday"
              placeholderText="Ingresa tu fecha de nacimiento"
              value={this.state.birthday}
              required
              onChange={this.handleInputDate}
              showMonthDropdown
              showYearDropdown
              useShortMonthInDropdown
            />
          </form>
        </div>
      </div>
    )
  }

}

export default PersonalData