import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
