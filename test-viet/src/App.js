import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Categories from './component/category';
import CategoryForm from './component/category/CategoryForm';
import DashBoard from './component/dashboard';
import Home from './component/home';
import Layout from './component/layout';
import SignIn from './component/login';
import { AuthContext } from './context/auth';
import { getCookie } from './context/cookie';
import { verify } from './endpoint/User';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';



function App() {

  // let auth = {};
  // if (localStorage.getItem("tokens")) {
  //   try {
  //     auth = JSON.parse(localStorage.getItem("tokens"))
  //   } catch (e) {
  //     auth = {}
  //   }
  // }

  let cookie = {
    token: getCookie("token"),
    name: getCookie("name")
  }

  const [authentication, setAuthentication] = useState(cookie);
  const verifyToken = async () => {
    
    // use localStoreage
    // let status = await verify(auth.token)
    // if (status === 200) setAuthentication(auth)

    // use cookies
    
    let status = await verify(cookie.token)
    if (status === 200) setAuthentication(cookie)

    else setAuthentication({})
  }

  useEffect(() => {
    verifyToken()
  }, [])

  const setAuth = (data) => {
    // localStorage.setItem("tokens", JSON.stringify(data));
    setAuthentication(data);
  }

  return (
    <AuthContext.Provider value={{ authentication, setAuthentication: setAuth }}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <PublicRoute path="/register" component={() => <SignIn isLogin={false} />} />
            <PublicRoute path="/login" component={() => <SignIn isLogin={true} />} />
            <PrivateRoute path="/dashboard/:name" component={DashBoard} />
            <PrivateRoute exact path="/categories" component={() => <Layout><Categories /></Layout>} />
            <PrivateRoute path="/categories/create" component={() => <Layout><CategoryForm /></Layout>} />
            <PrivateRoute path="/categories/edit" component={() => <Layout><CategoryForm type="edit" /></Layout>} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
