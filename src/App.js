import {Container, Row} from 'react-bootstrap';
import UserForm from "./components/UserForm/";
import UsersList from "./components/UsersList/";
import Header from "./components/Header/"
import DeleteModal from "./components/DeleteModal/"
import {useState} from "react";


// los componentes se pasan de padres a hijos por ello el add user ak tener todo los componentes es el que se va engargar de agregar lso datos. le vana  llegar los usuaris que entran por el user form para pasarlo a la lista ///pppp
const App =()=> {
  const [users, setUsers] = useState([]);
  const [toDelete, setToDelete] = useState();
  // const [editUser, setEdition] =useState();
  // console.log( users);
  
  //va a actualizar mis estado
  const addUser= (user)=>{
    setUsers([user, ...users]);
  };

  const deleteUser= (user)=>{
    setToDelete([user, ...users]);
  };

  return (
      <Container>
        <Header/>
        <Row>
            <UserForm addUser={addUser}/>
            <UsersList users={users} toDelete={deleteUser}/>
        </Row>
        <DeleteModal/>
      </Container>
    
  );
}



export default App;
