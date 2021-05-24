import './student.css'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import MoreSvg from './../../assets/img/more.svg'

const Student = () => {

    const [showModal, setShowModal] = useState(false)

    const [editModal, setEditModal] = useState(null)

    const [activeKeyPopup, setActiveKeyPopup] = useState(null)

    const handleShow = () => {
        setShowModal(true)
    }

    return (
        <div className="student">
            { showModal && <StudentModal buttonName="criar usuário" setModal={setShowModal}/>}
            { editModal && <StudentModal buttonName="editar usuário" modal={editModal} setModal={setEditModal}/>}
            <div>
                <Button className="student-add" type="primary" name="criar" onClick={handleShow}/>
                <h2 className="student-title">Alunos</h2>
            </div>
            
            <input className="input-search" type="text" id="" placeholder="Pesquisar"/>
            <ul className="student-header">
                <li>Id</li>
                <li>Nome</li>
                <li>Idade</li>
                <li>CPF</li>
                <li>Telefone</li>
                <li>Email</li>
                <li>Opções</li>
            </ul>
            <div className="student-list">
                {
                [
                    {
                        id: 1,
                        nome: "Lucas Yuji",
                        idade: 21,
                        cpf: "237.563.888-32",
                        telefone: "(11) 93085-5961",
                        email: "lucas@hotmail.com"
                    },
                    {
                        id: 1,
                        nome: "Lucas Yuji",
                        idade: 21,
                        cpf: "237.563.888-32",
                        telefone: "(11) 93085-5961",
                        email: "lucas@hotmail.com"
                    },
                ].map((item, index) => {
                    return <StudentItem 
                    key={index} 
                    popup={activeKeyPopup === index} 
                    handlePopup={() => setActiveKeyPopup(activeKeyPopup !== index ? index : null)}
                    showEditModal={() => { 
                        setActiveKeyPopup(null)
                        setEditModal(item) 
                    }}
                    id={item.id} nome={item.nome} idade={item.idade} cpf={item.cpf} telefone={item.telefone} email={item.email}/>
                })}
            </div>
        </div>
    )
}

const StudentModal = (props) => {
    
    const handleClose = () => props.setModal(false)

    return (
        <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.buttonName.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input className="modal-input" type="text" label="nome" value={props.modal.nome}/>
            <Input className="modal-input" type="text" label="idade" value={props.modal.idade}/>
            <Input className="modal-input" type="text" label="cpf" value={props.modal.cpf}/>
            <Input className="modal-input" type="text" label="telefone" value={props.modal.telefone}/>
            <Input className="modal-input" type="text" label="email" value={props.modal.email}/>
        </Modal.Body>
        <Modal.Footer>
          <Button name={props.buttonName}/>
        </Modal.Footer>
      </Modal>
    )
}

const StudentItem = (props) => {    

    const popup = () => {
        return (
            <Popup id={props.id} name={props.nome}>
                <PopItem name="Remover"/>
                <PopItem onClick={props.showEditModal} name="Editar"/>
            </Popup>
        )
    }

    return (
        <ul className="student-item">
            <li>{props.id}</li>
            <li>{props.nome}</li>
            <li>{props.idade}</li>
            <li>{props.cpf}</li>
            <li>{props.telefone}</li>
            <li>{props.email} </li>
            <li style={{position: 'relative'}}>
                {props.popup && popup()}
                <img className="student-more" src={MoreSvg} alt="more" onClick={props.handlePopup}/>
            </li>
        </ul>
    )
}

const Popup = (props) => {
    return (
        <div className="popup" onClick={props.showEditModal}>
            {props.children.map((item, index) => {
                const size = props.children.length - 1
                return (
                    <>
                        {item}
                        {index !== size && <hr/>}
                    </>
                )
            })}
        </div>
    )
}

const PopItem = (props) => {
    return (
        <div className="popitem" onClick={props.onClick}>
            {props.img && <img className="popitem-icon" src={props.img} alt="pop-icon"/>}
            <div className="popitem-name">{props.name}</div>
        </div>
    )
}

export default Student