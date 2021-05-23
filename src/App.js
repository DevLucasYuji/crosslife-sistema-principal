import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard'
import Header from './components/header/header'
import Login from './pages/login/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login/>
        </Route>
        <Route path="/dashboard">
          <Header/>
          <Dashboard/>
        </Route>
        <Route path="/alunos"></Route>
      </Switch>
    </Router>
  )
}

export default App;
