import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { Dashboard } from './Template/Dashboard';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact={true} >
                <Dashboard />
            </Route>
            <Route path="/pedidos" exact={true}>
            </Route>
            <Route path="/produtos" exact={true}>
            </Route>
            <Route path="/clientes" exact={true}>
            </Route>
            <Route path="/financeiro" exact={true}>      
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
