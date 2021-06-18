import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

const Home = lazy(() => import('./pages/home'))
const Browse = lazy(() => import('./pages/browse'))
const Login = lazy(() => import('./pages/login'))
const SignUp = lazy(() => import('./pages/sign-up'))

export default function App() {

  return (

    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route exact path={ROUTES.HOME} >
            <Home />
          </Route>
          <Route exact path={ROUTES.BROWSE} >
            <Browse />
          </Route>
          <Route exact path={ROUTES.SIGN_IN} >
            <Login />
          </Route>
          <Route exact path={ROUTES.SIGN_UP} >
            <SignUp />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );


}


