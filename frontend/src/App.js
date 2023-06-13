import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Auth from './pages/Auth'
const Layout = lazy(() => import('./containers/Layout'))


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={Auth} />]
          <Route path="/app" component={Layout} />
          <Redirect exact from="/" to="/auth" />
        </Switch>
      </Router>
    </>
  )
}

export default App
