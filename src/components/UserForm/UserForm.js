import {Col,Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import {useState} from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

const defaultUser ={
    id:"",
    name:"",
    age:"",
};

// yo no puedo usar una propiedad como variable para ello lo tengo q poner entre [] de esta forma actualizo la propiedad q estoy actualizando
const UserForm = ({addUser}) => {
    const [user,setUser]=useState(defaultUser); 
    const handleInput= (e) =>{
        // console.log(e.target.value);
        const prop = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [prop]:value,
        });
    };
    
    const createUser=(e)=>{
        e.preventDefault();
        addUser({...user, id:shortid.generate() });
    }

    
    return(
        <>
            <Col md={6}>
                <h2>Formulario</h2>
                <Form onSubmit={createUser}>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Nombre" name="name" onChange={handleInput} aria-label="Nombre" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Edad" name="age" onChange={handleInput} aria-label="Edad" />
                    </InputGroup>
                    <Button className="w-100" type="submit">Agregar</Button>
                </Form>
            </Col>

        </>
    );
};

//propTypes = son tipos q vienen en las props // documentar una prop _ en este caso esta prop va a recibir un array

// este componente debe recibir una prop user que sea un array  que contenga un objeto id/name/age - con arrayof podes indicar que queres q tegna el objeto

// este compononte debe recibir una funcion
UserForm.propTypes ={
    addUser:PropTypes.func.isRequired,
};



export default UserForm;

