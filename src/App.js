import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard'
import Header from './components/header/header'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/">
          <Dashboard/>
        </Route>
        <Route path="/alunos"></Route>
      </Switch>
    </Router>
  )
}

export default App;
