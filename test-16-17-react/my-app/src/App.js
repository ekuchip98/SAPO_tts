import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import Header from './commons/Header';
import Menu from './commons/Menu';
import Footer from './commons/Footer';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import CategoryList from './components/Category/CategoryList';
import Home from './components/Home';
import Login from './components/Login';
import CategoryEdit from './components/Category/CategoryEdit';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute exact path="/category-list" component={CategoryList} />
          <PrivateRoute path="/category-list/edit/:id" component={CategoryEdit} />
          <PrivateRoute path="/category-list/edit" component={CategoryEdit} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
