import { Home, ConvertEuro, ConvertDolar } from './pages'
import { Route, Switch } from 'react-router-dom'


export const routes = (
    <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/convert" exact>
      <Home />
    </Route>
    <Route path="/convert/:euro">
      <ConvertEuro />
    </Route>
    <Route path="/convert/:dolar">
      <ConvertDolar />
    </Route>
  </Switch>
  )