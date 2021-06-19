import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'


import IsUserLoggedIn from "./helpers/is-user-loggedin..helper";
import ProtectedRoute from "./helpers/protected-routes.helper";


const Home = lazy(() => import('./pages/home'))
const Browse = lazy(() => import('./pages/browse'))
const Login = lazy(() => import('./pages/login'))
const SignUp = lazy(() => import('./pages/sign-up'))

export default function App() {

  const user = null
  return (

    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact   >
            <Browse />
          </ProtectedRoute>
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}exact >
            <Login />
          </IsUserLoggedIn>
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
            <Home />
          </IsUserLoggedIn>
          <IsUserLoggedIn user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
            <SignUp />
          </IsUserLoggedIn>
        </Switch>
      </Suspense>
    </Router>
  )
}




