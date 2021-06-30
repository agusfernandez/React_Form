import PropTypes from 'prop-types';
import {Col, Table} from 'react-bootstrap';
//si hay algo dentro de users entonces generi este tr
import {useState} from "react";


const UsersList = ({users, deleteUser}) => {
    
    const removeUser=({users, deleteUser})=>{
        console.log("esto es " +users +deleteUser);
        return users;
    }
  
    return(
        <>
            <Col md={6}>
                 <h2>Lista de los usuarios</h2>
                 <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.length>0 && users.map(({id, name, age})=>(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td >✏️</td>
                            <td onClick={removeUser}>❌  </td>

                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </>
    );
}

//propTypes = son tipos q vienen en las props // documentar una prop _ en este caso esta prop va a recibir un array
// este componente debe recibir una prop user que sea un array  que contenga un objeto id/name/age - con arrayof podes indicar que queres q tegna el objeto
UsersList.propTypes ={
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string,
            name:PropTypes.string,
            age:PropTypes.number,
        }).isRequired
    ),
};


export default UsersList;