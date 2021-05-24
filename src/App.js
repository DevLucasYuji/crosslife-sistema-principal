import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard'
import Header from './components/header/header'
import Login from './pages/login/login'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Header/>
          <Dashboard/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
