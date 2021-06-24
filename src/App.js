import {Container, Row} from 'react-bootstrap';
import UserForm from "./components/UserForm/";
import UsersList from "./components/UsersList/";
import Header from "./components/Header/"
import {useState} from "react";

// los componentes se pasan de padres a hijos por ello el add user ak tener todo los componentes es el que se va engargar de agregar lso datos. le vana  llegar los usuaris que entran por el user form para pasarlo a la lista
const App =()=> {
  const [users, setUsers] = useState([]);
  // console.log( users);

  //va a actualizar mis estado
  const addUser= (user)=>{
    setUsers([user, ...users]);
  };


  return (
      <Container>
        <Header/>
        <Row>
            <UserForm addUser={addUser}/>
            <UsersList users={users}/>
        </Row>
      </Container>
    
  );
}

export default App;
