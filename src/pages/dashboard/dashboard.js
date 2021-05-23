import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Aside from '../../components/aside/aside'
import Panel from '../panel/panel';
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Aside/>
            <Container className="dashboard-container">
                <Switch>
                    <Route path="/alunos">
                        <Student/>
                    </Route>
                    <Route path="/">
                        <Panel/>
                    </Route>
                </Switch>
            </Container>
        </div>
    )
}

export default Dashboard