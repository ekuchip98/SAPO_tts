import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import React, { Component } from 'react';
import Login from './pages/Login';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <div id="wrap">
        <div className="wrap-1">
          <Header />
          <Menu/>
          {this.showContentMenu(routes)}
          <Footer/>
        </div>
      </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;

    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route 
                    key={index} 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.main} 
                />
            );
        });
    }

    return result;
}
}
export default App;
