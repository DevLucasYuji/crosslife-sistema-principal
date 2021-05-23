import { Col, Row } from 'react-bootstrap'
import './panel.css'
import PanelImage from '../../assets/img/panel.png'
import { Link } from "react-router-dom";

const Panel = () => {
    return (
        <Row className="panel">
            <Col xs="12" className="panel-content">
                <span className="panel-title">Gráfico do dashboard</span>
                <img className="panel-image" src={PanelImage} />
            </Col>
            <div className="panel-items d-flex justify-content-between">
                <PanelItem title="Alunos" description="Gerencie seus alunos" path="/alunos"/>
                <PanelItem title="Matriculas" description="Gerencie suas matriculas"/>
                <PanelItem title="Despesas" description="Gerencie suas despesas"/>
                <PanelItem title="Estoque" description="Gerencie seus estoques"/>
            </div>
        </Row>
    )
}

const PanelItem = (props) => {
    return (
        <Link to={props.path} style={{ textDecoration: 'none' }}>
            <div className="panel-item">
                <span className="panel-item-title">{props.title}</span>
                <span className="panel-description">{props.description}</span>
                <div className="panel-arrow"></div>
            </div>
        </Link>
        
    )
}
export default Panel