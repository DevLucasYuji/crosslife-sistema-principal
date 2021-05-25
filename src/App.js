import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard'
import Header from './components/header/header'
import Login from './pages/login/login'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "./hooks/auth";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/dashboard">
              <Header/>
              <Dashboard/>
            </Route>
            <Route exact path="/">
              <Login/>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
  )
}

export default App;
