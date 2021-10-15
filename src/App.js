import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './features/greeting/Greeting';


const App = () => ( 
  <React.Fragment>
    <Router>
      <Switch>          
        <Route exact path="/" render={() => <Greeting />} />
      </Switch>
    </Router> 
  </React.Fragment>  
);

export default App;

