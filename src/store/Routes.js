/* eslint-disable import/no-named-as-default */
import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { authenticated } from '../utils/_index'
import { store, persistor, history } from './config'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ForgotPassword from '../pages/PasswordForgot'
import RecoveryPassword from '../pages/PasswordRecovery'

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component, path, exact, restricted }) => (
  <Route
    path={path}
    exact={exact}
    render={() =>
      authenticated() && restricted ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component />
      )
    }
  />
)

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={() => (!authenticated() ? <Component /> : <Redirect to="/" />)}
  />
)

const Routes = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <PublicRoute path="/" component={Login} exact restricted />
          <PublicRoute
            path="/forgot-password"
            component={ForgotPassword}
            exact
            restricted
          />
          <PublicRoute
            path="/recovery-password/:id"
            component={RecoveryPassword}
            restricted
          />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default Routes
