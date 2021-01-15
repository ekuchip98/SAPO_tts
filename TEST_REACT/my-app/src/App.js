import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Panel from './components/Panel';
import PrivateRoute from './components/PrivateRote';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <PrivateRoute path="/" component={Panel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;