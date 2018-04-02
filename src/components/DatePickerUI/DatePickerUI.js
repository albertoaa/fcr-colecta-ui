import React from 'react'
import TextField from 'material-ui/TextField';

class DatePickerUI extends React.Component {

  render () {
    return (
      <TextField {...this.props}/>
    )
  }
}

export default DatePickerUI;