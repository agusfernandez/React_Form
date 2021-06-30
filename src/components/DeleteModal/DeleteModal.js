import { Button, Modal } from "react-bootstrap";


const DeleteModal=({ user })=>{
        return (
            <Modal show={user}>
                <Modal.Header>
                    <Modal.Title>Eliminar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Realmente desea borrar el usuario {user?.name}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >No</Button>
                    <Button variant="primary">Si</Button>
                </Modal.Footer>
            </Modal >
        )
    
}

export default DeleteModal;