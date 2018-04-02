import React, { Component } from 'react';
import EmailForm from './components/EmailForm/'
import PersonalData from './components/PersonalData'
import { BrowserRouter as Router, Route, Switch, PropsRoute } from "react-router-dom";
import * as routes from './constants/routes'

import './App.css';

class App extends Component {

  updateHistory = (history, data) => {
    if (data.currentRoute === routes.EMAIL) {
      if (!data.isRegistered) {
        history.push(routes.PERSONAL_DATA);
      }
    }
  }

  render() {
    return (

      <Router>
        <Switch>
          <Route 
            exact path={ routes.LANDING }
            render={(routeProps) => (
              <EmailForm {...routeProps} onUpdateHistory={ (data) => this.updateHistory(routeProps.history, data) } />
              )}
            />
          <Route
            path={ routes.EMAIL }
            component={EmailForm}
            onUpdateHistory={this.updateHistory} />  }
          />
          <Route
            path={ routes.PERSONAL_DATA }
            component={ PersonalData }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
