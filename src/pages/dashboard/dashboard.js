import { Switch, Route, useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Aside from '../../components/aside/aside'
import Panel from '../panel/panel';
import './dashboard.css'
import Student from "../student/student";
import { useEffect } from "react";

const Dashboard = () => {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage["token"]
        if(!token) history.push("/")
    }, [])
    return (
        <div className="dashboard">
            <Aside/>
            <Container className="dashboard-container">
                <Switch>
                    <Route path="/dashboard/alunos">
                        <Student/>
                    </Route>
                    <Route path="/dashboard">
                        <Panel/>
                    </Route>
                </Switch>
            </Container>
        </div>
    )
}

export default Dashboard