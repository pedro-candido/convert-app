import { Home, Convert, Result } from './pages'
import { Route, Switch } from 'react-router-dom'

export const routes = (
    <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/convert" exact>
      <Home />
    </Route>
    <Route path="/convert/:currency">
      <Convert/>
    </Route>
    <Route path="/result">
      <Result />
    </Route>
  </Switch>
  )