import './student.css'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import MoreSvg from './../../assets/img/more.svg'
import { useEffect } from 'react'
import api from '../../services/api'

const Student = () => {

    const [showModal, setShowModal] = useState(false)

    const [editModal, setEditModal] = useState(null)

    const [pesquisar, setPesquisar] = useState(null)

    const [activeKeyPopup, setActiveKeyPopup] = useState(null)

    const [students, setStudents] = useState([])

    useEffect(() => {
        api.get("/alunos").then((resp) => setStudents(resp.data))        
    }, [])

    const handleShow = () => {
        setShowModal(true)
    }

    const removeStudent = async (id) => {
        await api.delete(`/aluno/${id}`)
        setStudents(students.filter((std) => std.id != id))
    }

    const handleStudent = (student) => { setStudents([...students, student]) }

    return (
        <div className="student">
            { showModal && <StudentModal handleStudent={handleStudent} typeModal="add" buttonName="criar usuário" setModal={setShowModal}/>}
            { editModal && <StudentModal userId={editModal.id} typeModal="edit" buttonName="editar usuário" modal={editModal} setModal={setEditModal}/>}
            <div>
                <Button className="student-add" type="primary" name="criar" onClick={handleShow}/>
                <h2 className="student-title">Alunos</h2>
            </div>
            
            <input className="input-search" type="text" placeholder="Pesquisar" onChange={({target}) => setPesquisar(target.value)}/>
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
                    students && students.filter((std) => {
                        if(!pesquisar) return true
                        const pesq = new RegExp(`${pesquisar.toUpperCase()}.{0,}`)
                        return pesq.test(std.nome.toUpperCase())
                    }).map((item, index) => {
                    return <StudentItem 
                    key={index} 
                    popup={activeKeyPopup === index} 
                    handlePopup={() => setActiveKeyPopup(activeKeyPopup !== index ? index : null)}
                    removeItem={() => {
                        setActiveKeyPopup(null)
                        removeStudent(item.id)
                    }}
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

    const [nome, setNome] = useState(props.modal?.nome || "")
    const [idade, setIdade] = useState(props.modal?.idade || "")
    const [cpf, setCpf] = useState(props.modal?.cpf || "")
    const [telefone, setTelefone] = useState(props.modal?.telefone || "")
    const [email, setEmail] = useState(props.modal?.email || "")

    const alunoDTO = { 
        nome, 
        idade, 
        cpf, 
        telefone, 
        email 
    }

    const editaAluno = async () => {
        const aluno = await api.put(`/aluno/${props.userId}`, alunoDTO)
        if (aluno.data) {
            window.location.reload()
            handleClose()
        }
    }

    const addAluno = async () => {
        const aluno = await api.post("/aluno", alunoDTO)    
        if (aluno.data) {
            props.handleStudent(aluno.data)   
            handleClose()
        }
    }

    const handleModal = async (e) => {
        e.preventDefault()
        const typeModal = props.typeModal
        switch(typeModal) {
            case "edit":
                editaAluno()
                break;
            case "add":
                addAluno()
                break;
            default:
                break;
        }
    }

    return (
        <Modal show={true} onHide={handleClose}>
            <form onSubmit={handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.buttonName.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input className="modal-input" type="text" label="nome" onChange={({target}) => setNome(target.value)} value={nome}/>
                    <Input className="modal-input" type="text" label="idade" onChange={({target}) => setIdade(target.value)} value={idade}/>
                    <Input className="modal-input" type="text" label="cpf" onChange={({target}) => setCpf(target.value)} value={cpf}/>
                    <Input className="modal-input" type="text" label="telefone" onChange={({target}) => setTelefone(target.value)} value={telefone}/>
                    <Input className="modal-input" type="text" label="email" onChange={({target}) => setEmail(target.value)} value={email}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button name={props.buttonName}/>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

const StudentItem = (props) => {    

    const popup = () => {
        return (
            <Popup id={props.id} name={props.nome}>
                <PopItem onClick={props.removeItem} name="Remover"/>
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